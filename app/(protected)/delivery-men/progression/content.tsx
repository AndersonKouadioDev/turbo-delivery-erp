import UserListe from "@/components/dashboard/delivery-men/progression/user-liste";
import DropDownAction from "@/components/dashboard/slot/dropDownAction";
import { BirdPerformance } from "@/types/slot";
import { Avatar } from "@heroui/react";


export default function Content({initialData}:{initialData:BirdPerformance[]}){
   
    return (
     <UserListe initialData={initialData} />
    )
}