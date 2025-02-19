'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import DashboardChart from '@/components/dashboard/apercu/DashboardChart';
import SourcesCard from '@/components/dashboard/apercu/SourcesCard';
import StatsOverview from '@/components/dashboard/apercu/StatsOverview';
import { formatNumber } from '@/utils/formatNumber';
import { Select, SelectItem, DateRangePicker, DateValue, RangeValue, CalendarDate } from '@heroui/react';
import RestaurantList from '@/components/dashboard/apercu/RestaurantList';
import { ChiffreAffaireRestaurant } from '@/types/statistiques.model';
import DatabaseCards from '@/components/dashboard/apercu/DatabaseCards';
import useContentCtx from './useContentCtx';

export default function Content({ initialItems }: { initialItems: Record<string, any> }) {
    const {items, periods, period, setPeriod, dates, handleDateChange } = useContentCtx({ initialItems });

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2">
                <Select className="max-w-xs" selectedKeys={period} onSelectionChange={(keys) => setPeriod(keys as any)}>
                    {periods.map((period: { key: string; label: string }) => (
                        <SelectItem key={period.key}>{period.label}</SelectItem>
                    ))}
                </Select>
                <DateRangePicker className="max-w-xs relative" 
                onChange={(value) => handleDateChange(value as RangeValue<CalendarDate>)} 
                />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <Card className="p-6 flex flex-col justify-between bg-[#1e98e9] text-white shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Total Commande Terminée</div>
                        {/* <Select className="max-w-xs" selectedKeys={period} onSelectionChange={(keys) => setPeriod(keys as any)}>
                            {periods.map((period: { key: string; label: string }) => (
                                <SelectItem key={period.key}>{period.label}</SelectItem>
                            ))}
                        </Select> */}
                    </div>
                    <div className="text-3xl font-bold mb-4">
                        {formatNumber(items?.chiffreAffaire?.commandeTotalTermine ?? 0)} <br /> FCFA
                    </div>
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-white hover:bg-[#94d4ff] px-1 text-sm">
                            Voir toutes les commandes
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-transparent px-2">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6  flex flex-col justify-between  bg-[#E91E63] text-white shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Total Commande en Attente</div>
                       
                    </div>
                    <div className="text-3xl font-bold mb-4">
                        {formatNumber(items?.chiffreAffaire?.commandeTotalEnAttente ?? 0)} <br /> FCFA
                    </div>
                    <div className="flex items-center justify-between">
                        <Button variant="ghost" className="text-white hover:bg-white/10 px-2 text-sm">
                            Voir toutes les commandes
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6  flex flex-col justify-between  bg-[#1F2937] text-white shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Total Frais Livraison Terminée</div>
                       
                    </div>
                    <div className="text-3xl font-bold mb-4">
                        {formatNumber(items?.chiffreAffaire?.fraisLivraisonTotalTermine ?? 0)} <br /> FCFA
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Aujourd&apos;hui</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-sm font-medium">+2,8</span>
                        </div>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100 px-2">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>
                <Card className="p-6  flex flex-col justify-between bg-[#fffb0e] shadow-lg">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="text-base font-medium">Total Frais Livraison en Attente</div>
                       
                    </div>
                    <div className="text-3xl font-bold mb-4">
                        {formatNumber(items?.chiffreAffaire?.fraisLivraisonTotalEnAttente ?? 0)} <br /> FCFA
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Aujourd&apos;hui</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-sm font-medium">+2,8</span>
                        </div>
                        <Button variant="ghost" size="icon" className="hover:bg-gray-100 px-2">
                            <Printer className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="col-span-3 space-y-6">
                    <Card className="p-6 shadow-lg bg-white">
                        <DatabaseCards
                            items={[
                                { label: 'Total Personnel', value: items?.users?.totalElements ?? 0 },
                                { label: 'Total Partenaire', value: items?.restaurants?.totalElements ?? 0 },
                                { label: 'Total Livreur', value: items?.deliveryMen?.totalElements ?? 0 },
                                { label: 'Total Type de plat', value: items?.typePlats?.length ?? 0 },
                            ]}
                        />
                    </Card>
                    <Card className="p-6 shadow-lg bg-white">
                        <DashboardChart />
                    </Card>
                </div>
                <div className="space-y-6">
                    <SourcesCard />
                    <StatsOverview />
                </div>
            </div>
            <div>
                <RestaurantList data={items?.chiffresAffairesRestaurants as ChiffreAffaireRestaurant[]} />
            </div>
        </div>
    );
}
