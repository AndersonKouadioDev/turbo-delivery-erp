'use client';

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { BonLivraison } from '@/types/bon-livraison.model';
import useContentCtx from './useContentCtx';
import { Calendar, Cherry, CircleFadingPlus, Home, SquareMenu, ToggleRight, User } from 'lucide-react';

interface ContentProps {
    data: BonLivraison[] | null;
}

export default function Content({ data }: ContentProps) {
    const { columns, renderCell } = useContentCtx();

    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestions des tickets</h1>
            </div>
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                            <div className="flex gap-2 text-primary">
                                {column.uid === 'reference' ? <CircleFadingPlus size={15} /> 
                                : column.uid === 'date' ? <Calendar size={15} /> 
                                : column.uid === 'livreur' ? <User size={15} /> 
                                : column.uid === 'restaurant' ? <Home size={15} /> 
                                : column.uid === 'coutLivraison' ? <Cherry size={15} /> 
                                : column.uid === 'coutCommande' ? <SquareMenu size={15} /> 
                                : column.uid === 'statut' ? <ToggleRight size={15} /> 
                                : <></>}
                                {column.name}
                            </div>
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={data ?? []} emptyContent={'No rows to display.'}>
                    {(item) => <TableRow key={item.commandeId}>{(columnKey) => <TableCell>{renderCell(item, columnKey as keyof BonLivraison) as React.ReactNode}</TableCell>}</TableRow>}
                </TableBody>
            </Table>
        </div>
    );
}
