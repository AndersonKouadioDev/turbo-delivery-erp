'use client';

import { getBonLivraisonAll } from '@/src/actions/bon-commande.action';
import { PaginatedResponse } from '@/types';
import { BonLivraison } from '@/types/bon-livraison.model';
import { CalendarDate, RangeValue, Switch } from '@heroui/react';
import { Key, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const columns = [
  { name: 'Référence', uid: 'reference' },
  { name: 'Date et Heure', uid: 'date' },
  { name: 'Livreur', uid: 'livreur' },
  { name: 'Restaurant', uid: 'restaurant' },
  { name: 'Coût livraison', uid: 'coutLivraison' },
  { name: 'Coût commande', uid: 'coutCommande' },
  { name: 'Terminé', uid: 'statut' },
];

interface Props {
  initialData: PaginatedResponse<BonLivraison> | null;
}

export default function useContentCtx({ initialData }: Props) {
  const [isLoading, setIsLoading] = useState(!initialData);

  const [currentPage, setCurrentPage] = useState(initialData?.totalPages??1);
  const [pageSize] = useState(10);
  const [data, setData] = useState<PaginatedResponse<BonLivraison> | null>(initialData);

  // Crée un état pour stocker la date sélectionnée
  const [birthDate, setBirthDate] = useState<string | null>(null);

  // Fonction de gestion du changement de date
  const handleDateChange = (value: CalendarDate | null) => {
    if (value) {
      const date = new Date(value.toString())
      const formattedDate = date.toISOString().split('T')[0];
      setBirthDate((state)=>formattedDate); 
      handlerPage(1)
      console.log({birthDate});
      
    } else {
      setBirthDate(null)
    }
  };

  const handlerPage =(page:number)=>{

    setCurrentPage((state)=>page);

  }
  console.log({currentPage,birthDate})
  useEffect(() => {

    const fetchData = async () => {
        if(birthDate ){
      // setCurrentPage(page);
      setIsLoading(true);
      try {
        const newData = await getBonLivraisonAll(currentPage, pageSize, birthDate);
        setData(newData);
      } catch (error) {
        toast.error('Erreur lors de la récupération des données');
      } finally {
        setIsLoading(false);
      }
    }

    };
    fetchData();
  }, [birthDate,currentPage]);

//   useEffect(() => {
//   }, [data]);

  // Fonction de récupération des données

//   const fetchData = useCallback(async (page: number) => {
//     setCurrentPage(page);
//     setIsLoading(true);
//     try {
//       const newData = await getBonLivraisonAll(page - 1, pageSize, birthDate);
//       if (newData) 
//         setData(newData);
//     } catch (error) {
//       toast.error('Erreur lors de la récupération des données');
//     } finally {
//       setIsLoading(false);
//     }
//   },[birthDate,pageSize]);

  const renderCell = useCallback((bonLivraison: BonLivraison, columnKey: Key) => {
    const cellValue = bonLivraison[columnKey as keyof BonLivraison];
    switch (columnKey) {
      case 'coutLivraison':
        return <p>{String(cellValue) + ' FCFA'}</p>;
      case 'coutCommande':
        return <p>{String(cellValue) + ' FCFA'}</p>;
      case 'statut':
        return cellValue == 'TERMINER' ? <Switch size="sm" color="primary" readOnly isSelected /> : <Switch size="sm" isSelected={false} readOnly />;
      default:
        return cellValue;
    }
  }, []);

  return {
    renderCell,
    columns,
    data,
    // fetchData,
    handlerPage,
    currentPage,
    isLoading,
    handleDateChange,
  };
}
