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

const tabs = [
    { id: 'apercu', label: 'Aperçu' },
    { id: 'releve', label: 'Relevé de paie' },
    { id: 'bilan', label: 'Bilan de paie' },
    { id: 'partenaire', label: 'Bilan des partenaire' },
    { id: 'emprunts', label: 'Emprunts' },
    { id: 'cautions', label: 'Cautions' },
];

export default function Content({ items }: { items: { label: string; value: number }[] }) {
    const dates = [{ key: 'current', label: '31 Juin 2024 - 31 Juillet 2024' }];
    return (
        <div className="p-6 max-w-[1400px] mx-auto space-y-8">
            <Tabs items={tabs} className="w-full">
                {(item) => {
                    return <Tab key={item.id} title={item.label} />;
                }}
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 shadow-lg bg-white">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Revenu total</div>
                        <Select className="max-w-xs" defaultSelectedKeys={['current']}>
                            {dates.map((date) => (
                                <SelectItem key={date.key}>{date.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="text-3xl font-bold mb-4">14 674 480 FCFA</div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Aujourd&apos;hui</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-sm font-medium">+2,8</span>
                        </div>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6 bg-[#E91E63] text-white shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Dépenses effectuées</div>
                        <Select className="max-w-xs" defaultSelectedKeys={['current']}>
                            {dates.map((date) => (
                                <SelectItem key={date.key}>{date.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="text-3xl font-bold mb-4">8 674 480 FCFA</div>
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-white hover:bg-white/10 px-0 text-sm">
                            Voir toutes les dépenses
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6 bg-[#1F2937] text-white shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Dépenses effectuées</div>
                        <Select className="max-w-xs" defaultSelectedKeys={['current']}>
                            {dates.map((date) => (
                                <SelectItem key={date.key}>{date.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                    <div className="text-3xl font-bold mb-4">6 674 480 FCFA</div>
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-white hover:bg-white/10 px-0 text-sm">
                            Voir toutes les dépenses
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-3">
                    <Card className="p-6 shadow-lg bg-white">
                        <DashboardChart />
                    </Card>
                </div>
                <div className="space-y-6">
                    <SourcesCard />
                    <StatsOverview />
                </div>
            </div>
        </div>
    );
}
