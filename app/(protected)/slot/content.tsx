import DropDownAction from "@/components/dashboard/slot/dropDownAction";
import { TurboysBird, TurboysNotSlot } from "@/types/slot";
import { Avatar } from "@heroui/react";


interface Props {
    turboysBird: TurboysBird[],
    turboysNotSlot: TurboysNotSlot[];
}

export default function Content({turboysBird,turboysNotSlot}:Props){

    return (
        <div className="p-4 bbg-gray-100 min-h-screen">
        
        {/* Turboys avec créneaux */}
        <div className="mb-6 bg">
          <h2 className="text-lg font-semibold mb-2">Turboys ayant des créneaux</h2>
          <div className="bg-white flex flex-col gap-1 rounded-lg  overflow-hidden">
            {turboysBird.map((turboy) => (
              <div key={turboy.id} className=" w-full flex items-center border-2 rounded-2xl">
                 <div className="py-2 px-4 flex-1 flex gap-2 items-center  rounded-lg">
                    <div className="flex items-center w-1/2"> 
                    {/* <Avatar isBordered radius="full" size="md" src={undefinedRestaurant.logo_Url} /> */}
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <p className="font-semibold">{turboy.nom} {turboy.nom}</p>
                    </div>
                    <p className="w-1/2 text-sm text-gray-500">Inscrit le : {turboy.DateinscritLe}</p>
                 </div>

                 <div className="flex-1 flex items-center">
                 <p className="text-sm text-gray-500 mr-3">Défini le : {turboy.definiLe}</p>
                 <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm mr-3">
                      {turboy.creneau}
                    </span>
                    <DropDownAction id={turboy.id} url="turboys-bird"/>
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