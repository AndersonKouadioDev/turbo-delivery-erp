'use client';

import { SelectField } from '@/components/commons/select-field';
import { Button } from '@/components/ui/button';
import { Check, PencilIcon, XIcon } from 'lucide-react';
import React from 'react';
import { useTurboAssigneController } from './useTurboAssigneController';
import { SearchField } from '@/components/commons/form/search-field';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM, Restaurant } from '@/types/models';
import { UpdateDeliveryDialog } from '../../update-delivery/update-delivery';
import EmptyDataTable from '@/components/commons/EmptyDataTable';
import { ConfirmDialog } from '@/components/commons/confirm-dialog';
import { Pagination } from '@heroui/react';

interface Props {
    initialData: PaginatedResponse<LivreurStatutVM[]> | null;
    restaurants: Restaurant[] | null
}
export default function Content({ initialData, restaurants }: Props) {
    const livreurAssigneCtrl = useTurboAssigneController(initialData, restaurants);

    return (
        <div className="container mx-auto p-6 pt-0 flex-wrap">
            <SearchField searchKey={livreurAssigneCtrl.searchKey} onChange={livreurAssigneCtrl.setSearchKey} />
            <div className="bg-white rounded-lg overflow-x-auto lg:overflow-hidden xl:overflow-hidden md:overflow-x-auto ms:overflow-x-auto">
                {
                    livreurAssigneCtrl.data && livreurAssigneCtrl.data.content.length === 0 ?
                        <div className="text-center py-6 text-primary font-bold mt-10 text-xl">
                            <EmptyDataTable title='Aucun Resultat' />
                        </div>
                        :
                        <>
                            <div className="border-b-2 m-4 w-full  flex-1">Aujourd&apos;hui</div>
                            <table className="min-w-full border-collapse w-full">
                                <tbody>
                                    {(livreurAssigneCtrl.data?.content || [])?.map((item: any) => {
                                        return (

                                            <tr key={item.id} className="border-b hover:bg-gray-100 flex justify-between">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-7 h-7 rounded-full bg-gray-300"> </span>
                                                        <span> {item.nomPrenom}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 ">{item.dateInscription}</td>
                                                <td className="w-[300px] py-4 ">
                                                    <SelectField options={restaurants || []}
                                                        selectValue={item.restaurantLibelle}
                                                        setSelectValue={livreurAssigneCtrl.setSelectValue} label={'nomEtablissement'} />
                                                </td>
                                                <td className="px-6 py-4 flex gap-4">
                                                    <Button variant={'confirm-success'} className="h-8">
                                                        <span className="flex items-center gap-2">
                                                            <Check />
                                                            Confirmé
                                                        </span>
                                                    </Button>
                                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-red-500 cursor-pointer h-8"
                                                        onClick={() => livreurAssigneCtrl.modifier(item)}>
                                                        <PencilIcon className="h-5 w-5 " size={20} />
                                                    </span>
                                                    <span className="text-white p-1 bg-gray-400  rounded-full hover:bg-red-500 cursor-pointer h-8"
                                                        onClick={() => livreurAssigneCtrl.onConfirmStatut(item, "WAITING")}>
                                                        <XIcon className=" h-5 w-5" />
                                                    </span>

                                                </td>

                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table>
                            <UpdateDeliveryDialog
                                onClose={livreurAssigneCtrl.onClose}
                                isOpen={livreurAssigneCtrl.isOpen}
                                livreur={livreurAssigneCtrl.livreur}
                                restaurants={restaurants} />
                        </>
                }
            </div>
            <ConfirmDialog {...livreurAssigneCtrl.confirm} />
            <div className="flex h-fit z-10 justify-center mt-8 fixed bottom-4">
                <div className="bg-gray-200 absolute inset-0 w-full h-full blur-sm opacity-50"></div>
                <Pagination total={livreurAssigneCtrl.data?.totalPages ?? 1} page={livreurAssigneCtrl.currentPage}
                    onChange={livreurAssigneCtrl.fetchData} showControls color="primary" variant="bordered" isDisabled={livreurAssigneCtrl.isLoading} />
            </div>

        </div>
    );
}
