'use client';

import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AnalysticsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const tabs: {
        id: string;
        href: string;
        label: string;
    }[] = [
        { id: '/analystics', href: '/analystics', label: 'Aperçu' },
        { id: '/analystics/pay-slip', href: '/analystics/pay-slip', label: 'Relevé de paie' },
        { id: '/analystics/bilan', href: '/analystics/pay-slip', label: 'Bilan de paie' },
        { id: '/analystics/partenaire', href: '/analystics/pay-slip', label: 'Bilan des partenaire' },
        { id: '/analystics/emprunts', href: '/analystics/pay-slip', label: 'Emprunts' },
        { id: '/analystics/cautions', href: '/analystics/pay-slip', label: 'Cautions' },
    ];

    return (
        <Tabs color="primary" variant="underlined" items={tabs} selectedKey={pathname} className="w-full">
            {(item) => {
                return (
                    <Tab key={item.id} as={Link} href={item.href} title={item.label}>
                        {children}
                    </Tab>
                );
            }}
        </Tabs>
    );
}
