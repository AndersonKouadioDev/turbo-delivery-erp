'use client';
import DropDownAction from '@/components/dashboard/slot/dropDownAction';
import { Restaurant } from '@/types/creneau-turbo';
import { TurboysAssignes, TurboysNotSlot } from '@/types/slot';
import { Avatar } from '@heroui/react';
import { IconPoint, IconPointFilled } from '@tabler/icons-react';
import useContentCtx from './useContentCtx';
import { PaginatedResponse } from '@/types';
import progresseBare from '@/components/dashboard/delivery-men/progression/progression-barre';

interface Props {
  initialData: PaginatedResponse<Restaurant> | null;
  // initialData: Restaurant[] | null ;
}

export default function Content({ initialData }: Props) {
  const { data } = useContentCtx({ initialData });


  // const restaurants = data?.content ?? [];

  const dataNotCreneau = data.map(item=>item.livreurs.filter(livreur =>
    !livreur.disponibiliteCreneau ||
    !livreur.creneauVM ||
    !livreur.creneauVM.debut ||
    !livreur.creneauVM.fin
  ))

  const dataCreneau = data.map(item=>item.livreurs.filter(livreur =>
    livreur.disponibiliteCreneau &&
    livreur.creneauVM &&
    livreur.creneauVM.debut &&
    livreur.creneauVM.fin
  ))

  

  return (
    <div className="p-4 bbg-gray-100 min-h-screen">
      {/* Turboys avec créneaux */}

      <div className="relative mb-6 ">
        <h2 className="text-lg font-semibold mb-2">Turboys ayant des créneaux</h2>
        <div className="relative bg-white flex items-center flex-col gap-1 rounded-lg  overflow-auto">
       
           { data.map((restaurant, index) => {
              // const styleLivreurs = restaurant.livreurs.length > 1 ? `border-b-2 py-2 px-4  flex justify-between flex-grow items-center` : ` py-2 px-4  flex justify-between flex-grow items-center`;

              return (
                <div key={index} className=" w-full flex gap-4  border-2 rounded-2xl">
                  <div className="relative w-[230px]">
                    <div className=" flex items-center px-2 pt-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      {restaurant.nomRestaurant}
                    </div>
                    <p className="text-center text-2xl font-semibold"  >{restaurant.nombreLivreur}</p>
                  </div>

                  <div className="flex-grow border-l-2 ">
                    <div className="flex flex-col py-2">
                      {/* <Avatar isBordered radius="full" size="md" src={undefinedRestaurant.logo_Url} /> */}

                      { restaurant.livreurs.filter(livreur =>
                          livreur.disponibiliteCreneau &&
                          livreur.creneauVM &&
                          livreur.creneauVM.debut &&
                          livreur.creneauVM.fin
                        ).map((child, index) => {
                        return (
                          <div key={index}  className='flex items-center px-3 py-1'>
                            <div className="w-10">
                              <div className=" w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                            </div>
                            <p className="w-1/4 px-2 font-semibold" key={index}>
                              {child.nomComplet}
                            </p>
                            <p className="w-1/4 px-2" key={index}>
                              Inscrit le {child.dateInscrit}
                            </p>
                            <p className="w-1/4 px-2" key={index}>
                              Defini le {child.dateDefiniEmploiTemps}
                            </p>
              
                            <div className="relative w-1/4 px-2 flex items-center justify-between ">
                            {progresseBare(child)}
                            <span className="flex items-end mt-6">
                              {child.disponibilite?<IconPointFilled color="#16B84E" size={30} />:<IconPointFilled color="#FF0000" size={30} />}
                              
                            </span>
                              

                              {/* <span> {child.creneauVM.debut} - {child.creneauVM.fin}</span> */}
                            </div>
                            <div className="px-2">
                              <DropDownAction id={child.id} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

       
      </div>

      {/* Turboys sans créneaux */}
      <div>
          <h2 className="text-lg font-semibold mb-2">Turboys sans créneaux</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {dataNotCreneau.flatMap((restaurant,index) => (
             restaurant.map(turboy=>
              <div key={index} className="border-b border-gray-200 last:border-0">
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
             )
            ))}
          </div>
        </div>
    </div>
  );
}
