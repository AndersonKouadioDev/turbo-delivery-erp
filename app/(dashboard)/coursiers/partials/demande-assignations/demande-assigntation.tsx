
import { Button } from "@/components/ui/button";
import { Check, PencilIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useDemandeAssignationController } from "./controller";

interface Props {
    searchKey: string;
}

export function DemandeAssignation({ searchKey }: Props) {
    const ctrl = useDemandeAssignationController({ searchKey });
    return (
        <div className="container mx-auto p-6 pt-0 flex-wrap">
            <div className="bg-white rounded-lg overflow-x-auto lg:overflow-hidden xl:overflow-hidden md:overflow-x-auto ms:overflow-x-auto">
                <table className="min-w-full border-collapse w-full">
                    <tbody>
                        {ctrl.data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-gray-300"> </span>
                                        <span> {item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{item.date}</td>

                                <td className="px-6 py-4">
                                    <Button variant={"save"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                        Accepter
                                    </Button>
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-primary cursor-pointer">
                                        <PencilIcon className="h-5 w-5 " size={20} />
                                    </span>
                                    <span className="text-white p-1 bg-gray-400   rounded-full hover:bg-primary cursor-pointer" >
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
};



