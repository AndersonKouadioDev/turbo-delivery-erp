
import { SelectField } from "@/components/commons/select-field";
import { Button } from "@/components/ui/button";
import { Check, PencilIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useTurboAssigneController } from "./controller";
import { Tooltip } from "@nextui-org/react";

interface Props {
    searchKey: string;
}

export function TurboysAssignes({ searchKey }: Props) {
    const ctrl = useTurboAssigneController({ searchKey });
    return (
        <div className="container mx-auto p-6 pt-0 flex-wrap">
            <div className="bg-white rounded-lg overflow-x-auto lg:overflow-hidden xl:overflow-hidden md:overflow-x-auto ms:overflow-x-auto">
                <div className="border-b-2 m-4 w-full  flex-1">Aujourd'hui</div>
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
                                    <SelectField options={ctrl.options} setSelectValue={ctrl.setSelectValue} />
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        item.confirmed ?
                                            <Button variant={"confirm-success"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                <span className="flex items-center gap-2"><Check />Confirmé</span>
                                            </Button>
                                            :
                                            <Button variant={"save"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                Enregistrer
                                            </Button>
                                    }
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-primary cursor-pointer">
                                        <Tooltip content="Modifier un turboys">
                                            <PencilIcon className="h-5 w-5 " size={20} />
                                        </Tooltip>
                                        <Tooltip title="Modifier un turboys" />
                                    </span>
                                    <span className="text-white p-1 bg-gray-400   rounded-full hover:bg-primary cursor-pointer" >
                                        <XIcon className=" h-5 w-5" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="border-b-2 m-4 w-full  flex-1">Hier</div>
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
                                    <SelectField options={ctrl.options} setSelectValue={ctrl.setSelectValue} />
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        item.confirmed ?
                                            <Button variant={"confirm-success"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                <span className="flex items-center gap-2"><Check />Confirmé</span>
                                            </Button>
                                            :
                                            <Button variant={"save"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                Enregistrer
                                            </Button>
                                    }
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <span className="text-white  p-1 bg-gray-400  rounded-full hover:bg-gray-300 cursor-pointer">
                                        <PencilIcon className="h-5 w-5 " size={20} />
                                    </span>
                                    <span className="text-white p-1 bg-gray-400   rounded-full hover:bg-gray-300 cursor-pointer" >
                                        <XIcon className=" h-5 w-5" />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="border-b-2 m-4 w-full  flex-1">01/02/2025</div>
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
                                    <SelectField options={ctrl.options} setSelectValue={ctrl.setSelectValue} />
                                </td>
                                <td className="px-6 py-4">
                                    {
                                        item.confirmed ?
                                            <Button variant={"confirm-success"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                <span className="flex items-center gap-2"><Check />Confirmé</span>
                                            </Button>
                                            :
                                            <Button variant={"save"} onClick={() => ctrl.toggleConfirm(item.id)} className="h-8">
                                                Enregistrer
                                            </Button>
                                    }
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



