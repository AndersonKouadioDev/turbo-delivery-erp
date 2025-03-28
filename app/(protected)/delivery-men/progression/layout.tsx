"use client"
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import HeaderList from '../../../../components/dashboard/price-liste/header';
import {usePathname } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/dashboard/slot/sectionHeader';

export default function SlotLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const tabs: {
        id: string;
        href: string;
        label: string;
    }[] = [
        { id: '/delivery-men/progression', href: '/delivery-men/progression', label: 'Flotte performance de Turboys Bird' },
        { id: '/delivery-men/progression/turboys-assignes', href: '/delivery-men/progression/turboys-assignes', label: 'Flotte performance de Turboys Assignés' },
    ];
    
    return (
        <div>
            <SectionHeader/>
            {/* <HeaderList initialData={initialData}/> */}
            <Tabs color="primary" variant="underlined" items={tabs} selectedKey={pathname == '/delivery-men/progression'?'/delivery-men/progression':pathname == '/delivery-men/progression/turboys-assignes'?'/delivery-men/progression/turboys-assignes':''} className="w-full">
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