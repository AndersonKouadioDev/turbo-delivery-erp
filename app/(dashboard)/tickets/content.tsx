'use client';

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';
import { title } from '@/components/primitives';
import { BonLivraison } from '@/types/bon-livraison.model';
import useContentController from './useController';

interface ContentProps {
    data: BonLivraison[] | null;
}

export const columns = [
    { name: 'Référence', uid: 'reference' },
    { name: 'Date et Heure', uid: 'date' },
    { name: 'Livreur', uid: 'livreur' },
    { name: 'Restaurant', uid: 'restaurant' },
    { name: 'Coût livraison', uid: 'coutLivraison' },
    { name: 'Coût commande', uid: 'coutCommande' },
    { name: 'Authentif', uid: 'statut' },
];

export default function Content({ data }: ContentProps) {
    const { renderCell } = useContentController();

    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestions des tickets</h1>
            </div>
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                            {column.name}
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
