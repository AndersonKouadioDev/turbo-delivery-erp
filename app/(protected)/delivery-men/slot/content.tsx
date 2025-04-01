'use client'
import DropDownAction from "@/components/dashboard/slot/dropDownAction";
import UserListeModel1 from "@/components/dashboard/slot/user-liste-model-1";
import UserListeModel2 from "@/components/dashboard/slot/user-liste-model-2";
import { PaginatedResponse } from "@/types";
import { Livreur } from "@/types/creneau-bird";
import { TurboysBird, TurboysNotSlot } from "@/types/slot";
import { Avatar } from "@heroui/react";
import useContentCtx from "./useContentCtx";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


interface Props {
      initialData:PaginatedResponse<Livreur> | null;
    
}

export default function Content({initialData}:Props){
 
  const {data}=useContentCtx({initialData})

  const dataNotCreneau = data.filter(livreur =>
    !livreur.disponibiliteCreneau ||
    !livreur.creneauVM ||
    !livreur.creneauVM.debut ||
    !livreur.creneauVM.fin
  );
  const dataCreneau =  data.filter(livreur =>
    livreur.disponibiliteCreneau &&
    livreur.creneauVM &&
    livreur.creneauVM.debut &&
    livreur.creneauVM.fin
  );
  
  // const restaurants = data?.content ?? [];


   const style1 = 'bg-white flex flex-col gap-1 rounded-lg  overflow-x-auto'

   const style2 = 'gap-2 grid grid-cols-2 sm:grid-cols-4'

   
    return (
        <div className="p-4 bbg-gray-100 min-h-screen">
        
        {/* Turboys avec créneaux */}
        <div className="mb-6 bg">
          <h2 className="text-lg font-semibold mb-2">Turboys ayant des créneaux</h2>
          <div className={`${style1}`}>
            {dataCreneau.map((turboy) => (
              // <UserListeModel2 turboy={turboy}/>
            <UserListeModel1 turboy={turboy}/>
            ))}
          </div>
        </div>
        
        {/* Turboys sans créneaux */}

        <div>
          <h2 className="text-lg font-semibold mb-2">Turboys sans créneaux</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {dataNotCreneau.map((turboy) => (
              <div key={turboy.id} className="border-b border-gray-200 last:border-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">{turboy.nomComplet}</p>
                      <p className="text-sm text-gray-500">Inscrit le : {turboy.dateInscrit}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-3">Créé le : {turboy.dateNonDefini}</p>
                    {/* <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm mr-3">
                      {turboy.}
                    </span> */}
                    
                    <div className="relative">
                      {/* <button 
                        onClick={() => ouvrirMenu(turboy.id)}
                        className="px-2 py-1 text-gray-500"
                      >
                        •••
                      </button> */}
                      
                      {/* {menuOuvert === turboy.id && (
                        <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md z-10 w-64">
                          {actions.map((action, index) => (
                            <button 
                              key={index}
                              className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center ${action.danger ? 'text-red-500' : ''}`}
                            >
                              <span className="mr-2">{action.icon}</span>
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    )
}