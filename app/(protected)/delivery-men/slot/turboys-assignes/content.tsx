'use client'
import DropDownAction from "@/components/dashboard/slot/dropDownAction";
import DropDownActionAssignes from "@/components/dashboard/slot/dropDownActionAssignes";
import { TurboysAssignes, TurboysNotSlot } from "@/types/slot";
import { Avatar } from "@heroui/react";
import { IconPoint, IconPointFilled } from "@tabler/icons-react";


interface Props {
    turboysAssignes: TurboysAssignes[],
    turboysNotSlot: TurboysNotSlot[];
}

export default function Content({turboysAssignes,turboysNotSlot}:Props){

    return (
        <div className="p-4 bbg-gray-100 min-h-screen">



{/* Turboys avec créneaux */}
        
<div className="mb-6 bg">
          <h2 className="text-lg font-semibold mb-2">Turboys ayant des créneaux</h2>
          <div className="relative bg-white flex flex-col gap-1 rounded-lg  overflow-auto">
            {turboysAssignes.map((restaurant) => (
              <div key={restaurant.id} className=" w-full flex gap-4  border-2 rounded-2xl">
                <div className="relative w-1/4">
                    <div className=" flex items-center px-2 pt-8">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div> 
                        {restaurant.nameRestaurant}
                    </div>
                    <p className="text-center text-3xl font-semibold">{restaurant.sizeChildren}</p>
                 
                </div>
                
                <div className="flex-grow border-l-2 ">

                    <div className="flex flex-col py-2"> 
                    {/* <Avatar isBordered radius="full" size="md" src={undefinedRestaurant.logo_Url} /> */}
              
                    {restaurant.children.map((child,index) =>(
                        <div key={index} className="border-b-2 py-2 px-4  flex justify-between flex-grow items-center">
                        <div className="w-10">
                            <div className=" w-10 h-10 bg-gray-300 rounded-full mr-3"></div> 
                        </div>
                         <p className="w-1/4 px-2 font-semibold" key={index}>{child.nom} {child.prenom}</p>
                         <p className="w-1/4 px-2" key={index}>Inscrit le {child.DateinscritLe}</p>
                         <p className="w-1/4 px-2" key={index}>Defini le {child.definiLe}</p>
                         <div className="w-1/4 px-2 flex bg-yellow-200 rounded-xl"> 
                           <span> {child.creneau}</span>
                           {child.actif==true? <IconPointFilled color="#16B84E"   size={30}/>:
                           <IconPointFilled  color="#FF0000" size={30}/>}
                           
                         </div>
                         <div className="px-2">
                          <DropDownActionAssignes id={child.id} />
                         </div>
                         </div>))}

                    </div>
                </div>
              
              </div>
            ))}
          </div>
        
        </div>

        
    
        
        {/* Turboys sans créneaux */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Turboys sans créneaux</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {turboysNotSlot.map((turboy) => (
              <div key={turboy.id} className="border-b border-gray-200 last:border-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">{turboy.nom}</p>
                      <p className="text-sm text-gray-500">Inscrit le : {turboy.inscritLe}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-3">Créé le : {turboy.creeLe}</p>
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm mr-3">
                      {turboy.statut}
                    </span>
                    
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