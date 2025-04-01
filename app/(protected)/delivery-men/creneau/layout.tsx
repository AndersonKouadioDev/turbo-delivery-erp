"use client"
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import HeaderList from '../../../../components/dashboard/price-liste/header';
import {usePathname } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/dashboard/slot/sectionHeader';
import HeaderCreneau from '@/components/dashboard/delivery-men/ceneau/header-creneau';

export default function SlotLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const tabs: {
        id: string;
        href: string;
        label: string;
    }[] = [
        { id: '/delivery-men/creneau', href: '/delivery-men/creneau', label: 'Flotte performance de Turboys Bird' },
        { id: '/delivery-men/creneau/turboys-assignes', href: '/delivery-men/creneau/turboys-assignes', label: 'Flotte performance de Turboys Assignés' },
    ];
    
    return (
        <div>
            <HeaderCreneau/>
            {/* <HeaderList initialData={initialData}/> */}
            <Tabs color="primary" variant="underlined" items={tabs} selectedKey={pathname == '/delivery-men/creneau'?'/delivery-men/creneau':pathname == '/delivery-men/creneau/turboys-assignes'?'/delivery-men/creneau/turboys-assignes':''} className="w-full">
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