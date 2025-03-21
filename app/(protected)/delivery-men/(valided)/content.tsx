'use client';

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination } from '@heroui/react';
import useContentCtx from './useContentCtx';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM, Restaurant } from '@/types/models';
import { SearchField } from '@/components/commons/form/search-field';

interface ContentProps {
    initialData: PaginatedResponse<LivreurStatutVM[]> | null;
    restaurants: Restaurant[] | null
}

export default function Content({ initialData, restaurants }: ContentProps) {
    console.log(initialData)
    const { columns, renderCell, renderCols, data, fetchData, currentPage, isLoading, searchKey, setSearchKey } = useContentCtx({ initialData, restaurants });
    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <SearchField searchKey={searchKey} onChange={setSearchKey} />
            <Table aria-label="Example table with dynamic content">
                <TableHeader>
                    {columns.map((column) =>
                        <TableColumn key={column.uid} align={'start'}>
                            {renderCols(column)}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody>
                    {(data?.content || []).map((row: any) =>
                        <TableRow key={row.id}>{(columnKey) => <TableCell>{renderCell(row, columnKey) as React.ReactNode}</TableCell>}</TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex h-fit z-10 justify-center mt-8 fixed bottom-4">
                <div className="bg-gray-200 absolute inset-0 w-full h-full blur-sm opacity-50"></div>
                <Pagination total={data?.totalPages ?? 1} page={currentPage} onChange={fetchData} showControls color="primary" variant="bordered" isDisabled={isLoading} />
            </div>
        </div>
    );
}
