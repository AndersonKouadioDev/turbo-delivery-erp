'use client';
import { Button } from '@/components/ui/button';
import { Check, PencilIcon, XIcon } from 'lucide-react';
import React from 'react';
import { useDemandeAssignationController } from './useDemandeAssignationController';
import { SearchField } from '@/components/commons/form/search-field';

export default function Content() {
    const { data, toggleConfirm, selectValue, setSelectValue } = useDemandeAssignationController();

    return (
        <div className="container mx-auto p-6 pt-0 flex-wrap">
            <SearchField searchKey={selectValue} onChange={setSelectValue} />

            <div className="bg-white rounded-lg overflow-x-auto lg:overflow-hidden xl:overflow-hidden md:overflow-x-auto ms:overflow-x-auto">
                <table className="min-w-full border-collapse w-full">
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-gray-300"> </span>
                                        <span> {item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{item.date}</td>

                                <td className="px-6 py-4">
                                    <Button variant={'save'} onClick={() => toggleConfirm(item.id)} className="h-8">
                                        <span className="flex gap-2">
                                            <Check /> Accepter
                                        </span>
                                    </Button>
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-primary cursor-pointer">
                                        <PencilIcon className="h-5 w-5 " size={20} />
                                    </span>
                                    <span className="text-white p-1 bg-gray-400   rounded-full hover:bg-primary cursor-pointer">
                                        <XIcon className=" h-5 w-5" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
