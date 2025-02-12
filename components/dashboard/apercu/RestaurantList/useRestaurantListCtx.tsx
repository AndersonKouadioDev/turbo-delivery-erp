'use client';

import { BonLivraison } from '@/types/bon-livraison.model';
import { Switch } from '@nextui-org/react';
import { useCallback } from 'react';

export const columns = [
    { name: 'Référence', uid: 'reference' },
    { name: 'Date et Heure', uid: 'date' },
    { name: 'Livreur', uid: 'livreur' },
    { name: 'Restaurant', uid: 'restaurant' },
    { name: 'Coût livraison', uid: 'coutLivraison' },
    { name: 'Coût commande', uid: 'coutCommande' },
    { name: 'Authentif', uid: 'statut' },
];

export default function useRestaurantListCtx() {
    const renderCell = useCallback((bonLivraison: BonLivraison, columnKey: keyof BonLivraison) => {
        const cellValue = bonLivraison[columnKey];
        switch (columnKey) {
            case 'coutLivraison':
                return <p>{String(cellValue) + ' FCFA'}</p>;
            case 'coutCommande':
                return <p>{String(cellValue) + ' FCFA'}</p>;
            case 'statut':
                return cellValue == 'TERMINER' ? <Switch size="sm" color="primary" readOnly defaultSelected /> : <Switch size="sm" readOnly />;
            //   case "status":
            //     return (
            //       <Chip className="capitalize" color={statusColorMap[bonLivraison.status]} size="sm" variant="flat">
            //         {cellValue}
            //       </Chip>
            //     );
            //   case "actions":
            //     return (
            //       <div className="relative flex items-center gap-2">
            //         <Tooltip content="Details">
            //           <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            //             <EyeIcon />
            //           </span>
            //         </Tooltip>
            //         <Tooltip content="Edit bonLivraison">
            //           <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            //             <EditIcon />
            //           </span>
            //         </Tooltip>
            //         <Tooltip color="danger" content="Delete bonLivraison">
            //           <span className="text-lg text-danger cursor-pointer active:opacity-50">
            //             <DeleteIcon />
            //           </span>
            //         </Tooltip>
            //       </div>
            //     );
            default:
                return cellValue;
        }
    }, []);

    return {
        renderCell,
        columns,
    };
}
