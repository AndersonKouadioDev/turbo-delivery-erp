'use client'

import ButtonRetour from "@/components/commons/bouton-retour";
import EmptyDataTable from "@/components/commons/EmptyDataTable";
import SectionHeaderRetour from "@/components/commons/section-header-retour";
import TableCreneau from './table-creneau'
import { title } from '@/components/primitives';
import { PerformanceCreneauId } from "@/types/performance-creneauId";
import { Card } from "@heroui/react";
import ListPerformanceApercu from "@/components/dashboard/delivery-men/performance-apercu/list-performance";

interface Props {
  data: PerformanceCreneauId;

  // PerformanceCreneauId
    
}

export default function Content({data}:Props){
 
   
    return (
      <>
          <div>
              <div className="flex items-center pb-10">
                <ButtonRetour/>
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Aperçu-Performance</h1>
               </div>
                <ListPerformanceApercu data={data} />
               {/* {
                data.creneaux.slice(0, 4).map((item,index)=>{
                  return <TableCreneau key={index} initialData={item.progressions}/>
                })
               } */}

                
          </div>
      </>
    )
}