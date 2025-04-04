"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination } from "@heroui/react";
import { MoveUpRight, MoveDownRight } from "lucide-react";
import { useTableauDePaiController } from "./controller";
import { DetailFichePaieModal } from "../detail-fiche-de-paie/detail-fiche-paie-modal";


interface TableauDePaieProps {
    initialData: any[];
    periode?: string,
    searchKey?: string;
}

export function TableauDePaie({ initialData, periode, searchKey }: TableauDePaieProps) {
    const ctrl = useTableauDePaiController(initialData, searchKey);

    return (
        <div className="mt-4 bg-white  rounded-lg">
            <Table>
                <TableHeader>
                    <TableColumn className="text-md">Nom et prénoms</TableColumn>
                    <TableColumn className="text-md">Total réalisé</TableColumn>
                    <TableColumn className="text-md">Gain initial</TableColumn>
                    <TableColumn className="text-md">Jours de travail</TableColumn>
                    <TableColumn className="text-md">Week-end</TableColumn>
                    <TableColumn className="text-md">Taux d’intérêt</TableColumn>
                    <TableColumn className="text-md">Commission</TableColumn>
                    <TableColumn>{""}</TableColumn>
                    <TableColumn>{""}</TableColumn>
                </TableHeader>
                <TableBody>
                    {ctrl.data.map((item, index) => (
                        <TableRow key={index} className={"hover:bg-primary/10 cursor-pointer"} onClick={() => ctrl.openDetailModal(item)} >
                            <TableCell className="border-b-2">
                                <div className="flex items-center gap-4">
                                    <span className="w-7 h-7 rounded-full bg-gray-300"> </span>
                                    <div className="flex flex-col gap-1">{item.nomComplet} {ctrl.getStatusChip(item.typeLivreur)}</div>
                                </div>
                            </TableCell>
                            <TableCell className="border-b-2 text-gray-500">{item.totalReliser}&nbsp;&nbsp; FCFA</TableCell>
                            <TableCell className="border-b-2 text-gray-500">{item.gainInitial}&nbsp;&nbsp; FCFA</TableCell>
                            <TableCell className="border-b-2 text-gray-500">
                                {item.jourTravails.map((jour: any, index: number) => (
                                    <Chip key={index} className={`${jour.isWorking ? "bg-yellow-400" : "bg-primary/70"} mr-1 text-white`} size="sm" >{jour.abreviation}</Chip>
                                ))}
                            </TableCell>
                            <TableCell className="border-b-2 text-gray-500">
                                {item.weekend.map((weeek: any, index: number) => (
                                    <Chip key={index} size="sm" className={`${weeek.isWorking ? "bg-green-500" : "bg-gray-300"} mr-1 text-white`} >{weeek.abreviation}</Chip>
                                ))}
                            </TableCell>
                            <TableCell className="border-b-2 text-gray-500">{item.tauxInteret}</TableCell>
                            <TableCell className="border-b-2 text-gray-500">{item.commission}&nbsp;&nbsp; FCFA</TableCell>
                            <TableCell className=" border-b-2 text-gray-500">
                                {item.prime > 0 ? <span className="ml-1 flex gap-1 text-green-500"><MoveUpRight className="text-green-500" size={16} /> + {item.prime}&nbsp;&nbsp; FCFA</span>
                                    : <span className="ml-1 flex gap-1 text-red-500"> <MoveDownRight className="text-red-500" size={16} /> + {item.prime}&nbsp;&nbsp;  FCFA</span>}
                            </TableCell>
                            <TableCell className="border-b-2">
                                {ctrl.conditionValidation(item)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex h-fit z-10 justify-center mt-8 fixed bottom-4">
                <div className="bg-gray-200 absolute inset-0 w-full h-full blur-sm opacity-50"></div>
                <Pagination total={1} page={1} onChange={() => ""} showControls color="primary" variant="bordered" isDisabled={false} />
            </div>
            <DetailFichePaieModal onClose={ctrl.onClose} isOpen={ctrl.isOpen} details={ctrl.details} periode={periode} nonEligible={ctrl.nonEligible} />
        </div>
    );
};
