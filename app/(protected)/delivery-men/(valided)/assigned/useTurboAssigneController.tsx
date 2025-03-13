'use client';

import { useEffect, useState } from 'react';

const initialData = [
    { id: 1, name: 'Elvis BROU', date: 'Inscrit le 13/03/2024', restaurant: 'KFC', confirmed: false },
    { id: 2, name: 'William DO', date: 'Inscrit le 15/03/2024', restaurant: 'TSUNAMI', confirmed: true },
    { id: 3, name: 'Elvis Aka', date: 'Inscrit le 15/03/2024', restaurant: 'KFC', confirmed: true },
];

export const options = [
    { key: 'KFC', label: 'KFC' },
    { key: 'TSUNAMI', label: 'TSUNAMI' },
    { key: 'AGHA', label: 'AGHA' },
];

export function useTurboAssigneController() {
    const [data, setData] = useState(initialData);
    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        if (selectValue) {
            setData(initialData.filter((item) => item.name?.toLowerCase().includes(selectValue?.toLowerCase()) || item.restaurant?.toLowerCase().includes(selectValue?.toLowerCase())));
        } else {
            setData(initialData);
        }
    }, []);

    const toggleConfirm = (id: any) => {
        setData((prevData) => prevData.map((item) => (item.id === id ? { ...item, confirmed: !item.confirmed } : item)));
    };

    return {
        data,
        toggleConfirm,
        selectValue,
        setSelectValue,
        options,
        initialData,
    };
}
