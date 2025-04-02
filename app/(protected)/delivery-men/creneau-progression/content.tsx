'use client'
import UserListe from "@/components/dashboard/delivery-men/progression/user-liste";
import { BirdPerformance } from "@/types/slot";
import useContentCtx from "./useContentCtx";
import TableCreneau from "./tableCreneau";
import { PaginatedResponse } from "@/types";


interface props{
  initialData: PaginatedResponse<CreneauProgressionBird> | null
}


export default function Content({initialData}:props){


    const {data}= useContentCtx({initialData})
    
   
    return (
        <TableCreneau initialData={data}/>
    //  <UserListe initialData={data} />
    )
}