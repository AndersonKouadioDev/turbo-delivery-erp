import { usePathname } from 'next/navigation'; // Pour obtenir l'URL actuelle

import { PerformanceCreneauId } from "@/types/performance-creneauId"
import TableCreneau from "./table-creneau"
import FakeTableCreneau from "./fake-table-creneau"
import { Button } from "@heroui/react"
import Link from "next/link"
import EmptyDataTable from '@/components/commons/EmptyDataTable';




export default function ListPerformanceApercu({data}:{data:PerformanceCreneauId}){
    const pathname = usePathname(); 
    const lastIndex = data?.creneaux?.length ? data.creneaux.length - 1 : -1;
    const emploiId = lastIndex >= 0 ? data.creneaux[lastIndex]?.creneau?.emploiId : null;
   const creneaux= lastIndex >= 0 ? data.creneaux[lastIndex]: null;
    const newUrl = `${pathname}/planning-hebdomadaire/${emploiId}`;
   
 
    if(creneaux) { 
    return (
        <div className="flex flex-col gap-2">
       <TableCreneau initialData={creneaux}/>
        <div className="flex justify-end">
        <Button >
            {
                creneaux?  <Link href={newUrl}>
                Planing hebdomadaire
                </Link>:'Planing hebdomadaire non definie'
            }
    
        </Button>

        </div>
       <div className="grid gap-2 lg:grid-cols-2">
       <FakeTableCreneau/>
       <FakeTableCreneau/>
       </div>
        </div>
    )
}else{
    return<EmptyDataTable/>
}
    

}