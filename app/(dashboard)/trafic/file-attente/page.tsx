"use client"
import React, { Suspense } from 'react'
import Loading from '@/components/layouts/loading'
import RestaurantContent from './content'
import { useFileAttenteController } from '@/src/features/file-attente/file-attente.controller';

export default  function Page() {
  const ctrl = useFileAttenteController();
  return (
    <Suspense fallback={<Loading />}>
      <RestaurantContent fileAttentes={ctrl.fileAttentes} refreshData={ctrl.refreshData} isLoading={ctrl.isLoading} />
    </Suspense>
  )
}
