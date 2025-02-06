'use client';

import { CardHeader } from '@/components/commons/card-header';
import { PageWrapper } from '@/components/commons/page-wrapper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';
import RestaurantCards from './restaurant-card/restaurant-card';
import { RestaurantsTab } from './restaurant-tab/restaurant-tab';
import { Search, Map } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Input } from '@nextui-org/react';

export default function Page() {
    return (
        <PageWrapper>
            <div className='space-y-4'>
                <CardHeader title="File d'attente" />
                <div className="flex gap-4">
                    <div className="relative w-fit">
                        <Input
                            startContent={<Search size={20} />}
                            placeholder="Rechercher un coursier ou un restaurant"
                        />
                    </div>
                    <Link href={'/trafic'}>
                        <Badge className="rounded-full pr-4 cursor-pointer">
                            <Map className="mr-4" size={30} /> Maps
                        </Badge>
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 w-2/3">
                <Card className="card bg-slate-200 box-shadow text-center p-4 w-[35%]">
                    <div className="text-2xl mt-2 ">104 Turboys</div>
                    <Button variant={'destructive'} className="mt-8 w-full text-xl hover:bg-red-300">
                        Voir la liste
                    </Button>
                </Card>
                <Card className="card bg-slate-200 box-shadow text-center p-4 w-[35%]">
                    <div className="text-2xl mt-2">45 Partenairs</div>
                    <Button variant={'destructive'} className="mt-8 w-full text-xl hover:bg-red-300">
                        Voir la liste
                    </Button>
                </Card>
            </div>
            <RestaurantCards />
            <RestaurantsTab />
        </PageWrapper>
    );
}
