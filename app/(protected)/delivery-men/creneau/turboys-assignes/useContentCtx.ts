import { PaginatedResponse } from "@/types";
import { BirdPerformance } from "@/types/slot";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface props{
  initialData: PaginatedResponse<RestaurantProgressionTurbo> | null
}

export default function useContentCtx({initialData}:props){

    const searchParams = useSearchParams(); 
     const [search,setSearch] = useState<string|null>(null)
     const textParam = searchParams.get('text');

        const [data, setData] = useState<RestaurantProgressionTurbo[]|[]>(initialData?.content||[]);

         useEffect(() => { 
           // Initialiser search à partir de textParam
           setSearch(textParam);
         
           // Si search n'est pas vide, filtrer les données
           if (search !== null && search.trim() !== "") {
             const filtered = initialData?.content.filter(item => 
               item.nomRestaurant.toLowerCase().includes(search.toLowerCase())
             ) || [];
             setData(filtered);
           } else {
             // Si search est vide, restaurer la liste initiale
             setData(initialData?.content||[]);
             console.log("search vide");
           }
         
         }, [search, textParam, initialData]);
        
    

    return {
        data
    }
}