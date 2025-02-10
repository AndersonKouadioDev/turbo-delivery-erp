"use client"
import React, { Suspense } from 'react'
import Loading from '@/components/layouts/loading'
import RestaurantContent from './content'
import { useFileAttenteController } from '@/components/dashboard/trafic/file-attente/file-attente.controller';

export default async function Page() {
  const ctrl = await useFileAttenteController();
  return (
    <Suspense fallback={<Loading />}>
      <RestaurantContent fileAttentes={ctrl.fileAttentes} refreshData={ctrl.refreshData} isLoading={ctrl.isLoading} />
    </Suspense>
  )
}
