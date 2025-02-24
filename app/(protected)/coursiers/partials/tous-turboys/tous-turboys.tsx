

import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
import { Pagination } from "@heroui/react";
import { columns, useTousTurboysController } from "./controller";

interface Props {
    searchKey: string
}
export function TousTurboys({ searchKey }: Props) {
    const ctrl = useTousTurboysController({ searchKey })

    return (
        <Table aria-label=" " bottomContent={
            <div className="flex w-full justify-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={1}
                    total={10}
                    onChange={(page) => ""}
                />
            </div>
        }
            classNames={{
                wrapper: "min-h-[222px]",
            }}>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"} className="text-red-500 text-md">
                        {
                            column.icon ? <span className="flex gap-2 items-center"><column.icon size={20} />{column.name}</span>
                                :
                                <span>{column.name}</span>
                        }
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={ctrl.filterData}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{ctrl.renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}




