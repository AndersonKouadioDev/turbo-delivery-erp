"use client"

import { CardHeader } from '@/components/commons/card-header'
import { PageWrapper } from '@/components/commons/page-wrapper'
import { SearchAndLink } from '@/components/commons/search-and-link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import RestaurantCards from './restaurant-card/restaurant-card'
import { RestaurantsTab } from './restaurant-tab/restaurant-tab'
import { Search, Map } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useFileAttenteController } from '@/components/dashboard/trafic/file-attente/file-attente.controller'
import { LoaderSpinner } from '@/components/commons/loader-spinner'
import { FilleAttenteHistoriqueVM } from '@/types/file-attente.model'

interface Props {
  fileAttentes: FilleAttenteHistoriqueVM[];
  refreshData: () => void;
  isLoading: boolean;

}
export default function RestaurantContent({ fileAttentes, refreshData, isLoading }: Props) {
  return (
    <PageWrapper>
      {
        isLoading && <LoaderSpinner />
      }
      <div className=' bg-gray-100'>
        <CardHeader title="File d'attente" />
        <div className="flex gap-4 w-1/4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 border-red-500" size={20} />
            <Input
              placeholder="Rechercher un coursier ou un restaurant"
              className="pl-10 rounded-lg bg-white border-2 h-10"
            />
          </div>
          <Link href={'/trafic'}>
            <Badge className="rounded-full pr-4 cursor-pointer"> <Map className="mr-4" size={30} /> Maps</Badge>
          </Link>

        </div>
      </div>
      <div className='flex gap-4 w-2/3'>
        <Card className='card bg-slate-200 box-shadow text-center p-4 w-[35%]'>
          <div className='text-2xl mt-2 '>
            104 Turboys
          </div>
          <Button variant={"destructive"} className='mt-8 w-full text-xl hover:bg-red-300'>Voir la liste</Button>
        </Card >
        <Card className='card bg-slate-200 box-shadow text-center p-4 w-[35%]'>
          <div className='text-2xl mt-2'>
            45 Partenairs
          </div>
          <Button variant={"destructive"} className='mt-8 w-full text-xl hover:bg-red-300'>Voir la liste</Button>
        </Card >
      </div>
      <RestaurantCards fileAttentes={fileAttentes} refreshData={refreshData} />
      <RestaurantsTab fileAttentes={fileAttentes} />
    </PageWrapper>
  )
}
