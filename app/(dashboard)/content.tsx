// 'use client';

// import { title } from '@/components/primitives';

// import { Card, CardBody } from '@nextui-org/react';

// export default function Content({ items }: { items: { label: string; value: number }[] }) {
//     return (
//         <div className="w-full h-full flex flex-1 flex-col gap-4 lg:gap-6 mb-10">
//             <div className="flex items-center">
//                 <h1 className={title({ size: 'h3', class: 'text-primary' })}>Tableau de bord</h1>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {items.map((item, index) => (
//                     <CardContent key={index} {...item} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export function CardContent({ label, value }: { label: string; value: number }) {
//     return (
//         <Card className={`w-full`} shadow="sm">
//             <CardBody>
//                 <div className="flex items-center gap-4 py-8">
//                     <div className="flex-1">
//                         <h3 className={title({ size: 'h6', class: 'text-primary' })}>{label}</h3>
//                         <div className="flex flex-col sm:flex-row sm:items-center gap-2">
//                             <p className={title({ size: 'h4' })}>{value}</p>
//                         </div>
//                     </div>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }

'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, Info } from 'lucide-react';
import DashboardChart from '@/components/dashboard/DashboardChart';
import SourcesCard from '@/components/dashboard/SourcesCard';
import StatsOverview from '@/components/dashboard/StatsOverview';
import { Select, SelectItem, Tab, Tabs } from '@nextui-org/react';
import { Apprcu } from '@/components/dashboard/apercu/apercu';
import { RelevePaie } from '@/components/dashboard/releve-de-paie/releve-paie';


export default function Content({ items }: { items: { label: string; value: number }[] }) {
    const dates = [{ key: 'current', label: '31 Juin 2024 - 31 Juillet 2024' }];
    const tabs = [
        { id: 'apercu', label: 'Aperçu', children: <Apprcu dates={dates} /> },
        { id: 'releve', label: 'Relevé de paie', children: <RelevePaie /> },
        { id: 'bilan', label: 'Bilan de paie' },
        { id: 'partenaire', label: 'Bilan des partenaire' },
        { id: 'emprunts', label: 'Emprunts' },
        { id: 'cautions', label: 'Cautions' },
    ];

    return (
        <div className="p-6 max-w-[1400px] mx-auto space-y-8">
            <Tabs items={tabs} className="w-full">
                {(item) => {
                    return <Tab key={item.id} title={item.label} children={item.children} />;
                }}
            </Tabs>



        </div>
    );
}
