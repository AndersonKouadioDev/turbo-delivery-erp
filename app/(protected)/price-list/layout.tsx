"use client"
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import HeaderList from '../../../components/dashboard/price-liste/header';
import {usePathname } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '../../../components/dashboard/price-liste/SectionHeader';

export default function PriceListLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const tabs: {
        id: string;
        href: string;
        label: string;
    }[] = [
        { id: '/price-list', href: '/price-list', label: 'Liste des restaurants definis' },
        { id: '/price-list/restaurants-undefined', href: '/price-list/restaurants-undefined', label: 'Liste des restaurants indefinis' },
    ];
    
    return (
        <div>
            <SectionHeader/>
            {/* <HeaderList initialData={initialData}/> */}
            <Tabs color="primary" variant="underlined" items={tabs} selectedKey={pathname == '/price-list' ? '/price-list' : pathname == '/price-list/restaurants-undefined'?'/price-list/restaurants-undefined':''} className="w-full">
            {(item) => {
                return (
                    <Tab key={item.id} as={Link} href={item.href} title={item.label}>
                        {children}
                    </Tab>
                );
            }}
            </Tabs>
        </div>
    );
}
