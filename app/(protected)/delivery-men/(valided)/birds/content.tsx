'use client';

import { Button } from '@/components/ui/button';
import { Check, PencilIcon, XIcon } from 'lucide-react';
import React from 'react';
import { useTurboysBirdController } from './useTurboAssigneController';
import { SearchField } from '@/components/commons/form/search-field';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM, Restaurant } from '@/types/models';
import { Tooltip } from '@heroui/react';
import { UpdateDeliveryDialog } from '../../update-delivery/update-delivery';


interface Props {
    initialData: PaginatedResponse<LivreurStatutVM[]> | null;
    restaurants?: Restaurant[] | null;
}
export default function Content({ initialData, restaurants }: Props) {
    const livreurNonAssingeCtrl = useTurboysBirdController(initialData);

    return (
        <div className="container mx-auto p-6 pt-0 flex-wrap">
            <SearchField searchKey={livreurNonAssingeCtrl.searchKey} onChange={livreurNonAssingeCtrl.setSearchKey} />

            <div className="bg-white rounded-lg overflow-x-auto lg:overflow-hidden xl:overflow-hidden md:overflow-x-auto ms:overflow-x-auto">
                <table className="min-w-full border-collapse w-full">
                    <tbody>
                        {(livreurNonAssingeCtrl.data || []).map((item: any) => (
                            <tr key={item.id} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-gray-300"> </span>
                                        <span> {item.nomPrenom}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{item.dateInscription}</td>
                                <td className="px-6 py-4 flex gap-4 items-center">

                                    <Button variant={'confirm-success'} onClick={() => ""} className="h-8">
                                        <span className="flex items-center gap-2">
                                            <Check />
                                            Confirmé
                                        </span>
                                    </Button>

                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-primary cursor-pointer"
                                        onClick={() => livreurNonAssingeCtrl.modifier(item)}>
                                        <Tooltip content="Modifier un turboys">
                                            <PencilIcon className="h-5 w-5 " size={20} />
                                        </Tooltip>
                                        <Tooltip title="Modifier un turboys" />
                                    </span>
                                    <span className="text-white p-1 bg-gray-400   rounded-full hover:bg-primary cursor-pointer">
                                        <XIcon className=" h-5 w-5" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <UpdateDeliveryDialog
                    onClose={livreurNonAssingeCtrl.onClose}
                    isOpen={livreurNonAssingeCtrl.isOpen}
                    livreur={livreurNonAssingeCtrl.livreur}
                    restaurants={restaurants || []} />
            </div>
        </div>
    );
}
