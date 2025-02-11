'use client'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, Info } from 'lucide-react';
import DashboardChart from '@/components/dashboard/DashboardChart';
import SourcesCard from '@/components/dashboard/SourcesCard';
import StatsOverview from '@/components/dashboard/StatsOverview';
import { Select, SelectItem, Tab, Tabs } from '@nextui-org/react';

interface Props {
    dates: any
}
export function Appercu({ dates }: Props) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 shadow-lg bg-white">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Revenu total</div>
                        <Select className="max-w-xs" defaultSelectedKeys={['current']}>
                            {dates.map((date: any) => (
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
                            {dates.map((date: any) => (
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
                            {dates.map((date: any) => (
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
    )
}