'use client';
import { useSearchParams } from 'next/navigation';
import {  getPriceListByRestaurant } from '@/src/price-list/price-list.action';
import { DeliveryFee, RestaurantDefini } from '@/types/price-list';
import {  Tooltip } from '@heroui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { _deliveryFeeCreateSchema, deliveryFeeCreateSchema } from '@/src/price-list/price-list.schema';
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js';
import FormUpDate from '../../../components/dashboard/price-liste/FormUpDate';
import PriceListeTools from '@/components/dashboard/price-liste/price-list-tools';
import { useRouter } from 'next/navigation';

interface Props {
    initialData: RestaurantDefini[];
}
export const columns = [
    { name: 'Zone', uid: 'zone' },
    { name: 'Distance', uid: 'distance' },
    { name: 'Coût de livraison', uid: 'prix' },
    { name: 'Commission', uid: 'commission' },
    { name: 'Action', uid: 'actions' },
];

export default function useContentViewTable({ initialData }: Props) {    
    
   


    const tabs = initialData.map((resto) => ({ id: resto.id, nomComplet: resto.nomEtablissement }));
   

    const tabsRef = useRef<HTMLDivElement>(null);
    const [deliveryFees, setDeliveryFees] = useState<DeliveryFee[]>([]);
    
    const [defaultVal,setDefaultVal]=useState<DeliveryFee| undefined>()
    const [selectedKey, setSelectedKey] = useState<string | null>(initialData.length !== 0 ? initialData[0].id : null);
    const [inputValue, setInputValue] = useState<string>('');
    const [search,setSearch] = useState<string|null>(null)
    const [initialDataPriceList,setInitialDataPriceList] = useState<DeliveryFee[]>([])
    const searchParams = useSearchParams(); 
    const textParam = searchParams.get('text'); 
  

    useEffect(() => { 
        // Initialiser search à partir de textParam
        setSearch(textParam);
      
        // Si search n'est pas vide, filtrer les données
        if (search !== null && search.trim() !== "") {
          const filtered = initialDataPriceList.filter(item => 
            item.zone.toLowerCase().includes(search.toLowerCase())
          ) || [];
          setDeliveryFees(filtered);
          console.log("search non");
        } else {
          // Si search est vide, restaurer la liste initiale
          setDeliveryFees(initialDataPriceList);
          console.log("search vide");
        }
      
      }, [search, textParam, initialDataPriceList]);
      

    const handleChangeSelectedKey = (key: string) => {
        setSelectedKey(key);
    };


    const handleMoveScrool = (value: 100 | -100) => {
        tabsRef?.current?.scrollTo({
            left: tabsRef?.current?.scrollLeft + value,
            behavior: 'smooth',
        });
    };

    const handleFetchDeliveryFee = async (restaurantId: string) => {
        // Requete Server Action        
        const data = await getPriceListByRestaurant(restaurantId, 0, 10);
        if(data)
        setInitialDataPriceList(data?.content);    

            
    };

  
    useEffect(() => {
        if (selectedKey) {
            handleFetchDeliveryFee(selectedKey);
        }
    }, [selectedKey]);

    const renderCell = useCallback((delieveryFee: DeliveryFee, columnKey: any) => {
        setDefaultVal(delieveryFee)
        
        switch (columnKey) {
            case 'zone':
                return (
                    <span>                       
                        {delieveryFee.zone}
                    </span>
                );
            case 'distance':
                return (
                    <span>
                        {delieveryFee.distanceDebut}-{delieveryFee.distanceFin} Km
                    </span>
                );
            case 'prix':
                return <span>{delieveryFee.prix} (XOF)</span>;
            case 'commission':
                return <span>{delieveryFee.commission} (XOF)</span>;
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Edit user">
                            <FormUpDate initialData={delieveryFee} restaurantId={selectedKey} />
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                       <PriceListeTools id={delieveryFee.id ||''} />
                        </Tooltip>
                    </div>
                );
            default:
                return <></>;
        }
    }, []);

    return {
        columns,
        selectedKey,
        tabs,
        tabsRef,
        deliveryFees,
        handleMoveScrool,
        handleFetchDeliveryFee,
        handleChangeSelectedKey,
        renderCell,
    };
}
