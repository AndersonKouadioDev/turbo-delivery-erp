'use client'
import DropDownAction from "@/components/dashboard/slot/dropDownAction";
import UserListeModel1 from "@/components/dashboard/slot/user-liste-model-1";
import UserListeModel2 from "@/components/dashboard/slot/user-liste-model-2";
import { PaginatedResponse } from "@/types";
import { LivreurBird } from "@/types/creneau-bird";
import { TurboysBird, TurboysNotSlot } from "@/types/slot";
import { Avatar, Card } from "@heroui/react";
import useContentCtx from "./useContentCtx";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconLayoutGrid, IconListCheck } from "@tabler/icons-react";
import EmptyDataTable from "@/components/commons/EmptyDataTable";
import UserListBird from "@/components/dashboard/delivery-men/slot/bird/user-list-bird";
import AllModelView from "@/components/dashboard/delivery-men/slot/assignes/all-model-view";
import AllModelViewNotCreneau from "@/components/dashboard/delivery-men/slot/bird/all-model-view";
// import UserListNoCreneau from "@/components/dashboard/slot/bird/user-list-no-creneau";


interface Props {
      initialData:PaginatedResponse<LivreurBird> | null;
    
}

export default function Content({initialData}:Props){
  const [value, setValue] = useState<'list' | 'grid'>('list');
  
  const style1 = 'bg-white flex flex-col gap-1 rounded-lg  overflow-x-auto'
  const style2 = ' grid gap-6 md:grid-cols-2 lg:grid-cols-3'

 
  const {birdCreneau,birdNotCreneau}=useContentCtx({initialData})

  console.log({birdCreneau:birdCreneau});

      if(!birdCreneau||birdCreneau.length==0){
        return <EmptyDataTable/>
      }


      // const restaurants = data?.content ?? [];

   
    return (
        <Card className="p-4 bbg-gray-100 min-h-screen">
        
        <AllModelView value={value} setValue={setValue} birdCreneau={birdCreneau} />

        <AllModelViewNotCreneau value={value} setValue={setValue} birdNotCreneau={birdNotCreneau} />
           
      </Card>
    )
}