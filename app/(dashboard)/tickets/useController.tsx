'use client';

import { BonLivraison } from '@/types/bon-livraison.model';
import { Key, useCallback } from 'react';

export default function useContentController() {
    const renderCell = useCallback((bonLivraison: BonLivraison, columnKey: keyof BonLivraison) => {
        const cellValue = bonLivraison[columnKey];

        switch (columnKey) {
            //   case "role":
            //     return (
            //       <div className="flex flex-col">
            //         <p className="text-bold text-sm capitalize">{cellValue}</p>
            //         <p className="text-bold text-sm capitalize text-default-400">{bonLivraison.team}</p>
            //       </div>
            //     );
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
    };
}
