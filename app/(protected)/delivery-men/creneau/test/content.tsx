import UserListe from "@/components/dashboard/delivery-men/progression/assignes/user-liste";
import { PaginatedResponse } from "@/types";
import { LivreurPerformance } from "@/types/creneau-performance";
import { RestaurantTuboProgression } from "@/types/slot";
import useContentCtx from "./useContentCtx";
import { CreneauxRestaurantProgression } from "@/types/creneaux-progression";



interface Props {
      initialData:any;
    }

export default function Content({initialData}:Props){
        
      const performance = initialData ?? [];

      console.log({initialDataiii:initialData});
      
    
    return <UserListe initialData={performance}/>
}



