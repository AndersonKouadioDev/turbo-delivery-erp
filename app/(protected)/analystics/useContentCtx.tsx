'use client';

import { use, useEffect, useState } from 'react';
import { CalendarDate, RangeValue } from '@heroui/react';
import {DateValue} from "@internationalized/date";
import { getAllChiffreAffaire, getAllRestaurantChiffreAffaire } from '@/src/actions/statistiques.action';

interface PeriodOption {
    key: string;
    label: string;
}

export const periods: PeriodOption[] = [
    { key: 'customized', label: 'Personnalisée' },
    { key: 'week', label: 'Par semaine' },
    { key: '2week', label: 'Par quinzaine' },
    { key: 'month', label: 'Par mois' },
];

export default function useContentCtx({ initialItems }: { initialItems: Record<string, any> }) {
    const [items, setItems] = useState(initialItems);

    const [period, setPeriod] = useState(new Set(['customized']));
    
    const [dates, setDates] = useState<RangeValue<Date|null>>({
        start: null,
        end: null
    });

    const handleDateChange = (value: RangeValue<CalendarDate>) => {
        setDates(
            {
                start: value.start ? new Date(value.start.toString()):null,
                end: value.end ? new Date(value.end.toString()):null,
            }
        );
    }

    const handleFetchData = async () => {
         const chiffreAffaire = await getAllChiffreAffaire();
        const chiffresAffairesRestaurants = await getAllRestaurantChiffreAffaire();

        setItems((state)=>{return {...state, chiffreAffaire, chiffresAffairesRestaurants}});
    }

    useEffect(() => {
            handleFetchData();
    }, [dates, period]);

    return {
        items,
        periods,
        period,
        setPeriod,
        dates,
        handleDateChange
    };
}