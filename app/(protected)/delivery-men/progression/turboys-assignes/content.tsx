import UserListe from "@/components/dashboard/delivery-men/progression/assignes/user-liste";
import { RestaurantTuboProgression } from "@/types/slot";

export default function Content({initialData}:{initialData:RestaurantTuboProgression[]}){

    
    return <UserListe initialData={initialData}/>
}