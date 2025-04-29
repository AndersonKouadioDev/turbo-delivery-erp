'use client'

import { useEffect, useState } from "react";
import { PaginatedResponse } from "@/types";
import { Restaurant } from "@/types/creneau-turbo";
import { useSearchParams } from "next/navigation";

interface props{
    initialData: PaginatedResponse<Restaurant> | null;
}

  

export default function useContentCtx({initialData}:props){
    
     const searchParams = useSearchParams(); 
     const [search,setSearch] = useState<string|null>(null)
     const textParam = searchParams.get('text');
     const [initialTurboysCreneau,setInitialTurboysCreneau] = useState<Restaurant[]>([])
     const [turboysCreneau,setTurboysCreneau] = useState<Restaurant[]>([])
    //  const [initialTurboysNotCreneau,setInitialTurboysNotCreneau] = useState<Restaurant[]>([])
    //  const [turboysNotCreneau,setTurboysNotCreneau] = useState<Restaurant[]>([])
         
        function filterTurboysCreneau(){
          let data
          if(initialData)
         data=initialData.content.filter(item=>{
        let data
         data =item.livreurs.filter(item=>item.disponibiliteCreneau)
         if(data.length){
          return true
         }else{
          return false
         }
      })
      setInitialTurboysCreneau(data||[])
           }

      //   function filterTurboysNotCreneau(){
      //     let data
      //     if(initialData)
      //    data=initialData.content.filter(item=>{
      //   let data
      //    data =item.livreurs.filter(item=>!item.disponibiliteCreneau)
      //    if(data.length){
      //     return true
      //    }else{
      //     return false
      //    }
      // })
      // setInitialTurboysNotCreneau(data||[])
      //   console.log({daiii:data});
        
      //   }

        useEffect(()=>{
          filterTurboysCreneau()
          // filterTurboysNotCreneau()

        },[])


         useEffect(() => { 
           // Initialiser search à partir de textParam
           setSearch(textParam);
         
           // Si search n'est pas vide, filtrer les données
           if (search !== null && search.trim() !== "") {
             const filtered = initialTurboysCreneau.filter(item => 
               item.nomRestaurant.toLowerCase().includes(search.toLowerCase())
             ) || [];
             setTurboysCreneau(filtered);
           } else {
             // Si search est vide, restaurer la liste initiale
             setTurboysCreneau(initialTurboysCreneau||[]);
           }
         
         }, [search, textParam, initialTurboysCreneau]);
        
    

    return {
        turboysCreneau
    }
}