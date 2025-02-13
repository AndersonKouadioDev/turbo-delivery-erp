'use client';

import { useState } from 'react';

export const periods: {
    key: string;
    label: string;
}[] = [
    { key: 'customized', label: 'Personnalisée' },
    { key: 'week', label: 'Par semaine' },
    { key: '2week', label: 'Par quinzaine' },
    { key: 'month', label: 'Par mois' },
];

export default function useContentCtx({ items }: { items: Record<string, any> }) {
    const [period, setPeriod] = useState(new Set(["customized"]));

    const [dates, setDates] = useState();

    return { periods, period, setPeriod };
}
