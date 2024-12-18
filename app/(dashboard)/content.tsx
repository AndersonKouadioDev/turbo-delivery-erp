'use client';

import { title } from '@/components/primitives';

import { Card, CardBody } from '@nextui-org/react';

export default function Content({ items }: { items: { label: string; value: number }[] }) {
    return (
        <div className="w-full h-full flex flex-1 flex-col gap-4 lg:gap-6 mb-10">
            <div className="flex items-center">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Accueil</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <CardContent key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export function CardContent({ label, value }: { label: string; value: number }) {
    return (
        <Card className={`w-full`} shadow="sm">
            <CardBody>
                <div className="flex items-center gap-4 py-8">
                    <div className="flex-1">
                        <h3 className={title({ size: 'h6', class: 'text-primary' })}>{label}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className={title({ size: 'h4' })}>{value}</p>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
