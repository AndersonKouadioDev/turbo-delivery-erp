
'use client'

import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
  } from "@heroui/react";
import EmptyDataTable from "@/components/commons/EmptyDataTable";
import progresseBarePerformance from "@/components/dashboard/delivery-men/performance-creneau/progression-bare-performance";
import DropDownPerformanceCrenea from "@/components/dashboard/delivery-men/performance-creneau/drop-down-performance-creneau";
  

const gainsData :PerformanceApercuGlobalGain  = {
  solde: 0,
  gains: [
    {
      date: "2025-04-08",
      jour: "LUNDI",
      gain: {
        solde: 0,
        gains: [
          {
            code: "ABeC123",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABCd123",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABCm123",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABC1f23",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          }
        ]
      }
    },
    {
      date: "2025-04-08",
      jour: "MARDI",
      gain: {
        solde: 0,
        gains: [
          {
            code: "EEBC123",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABkC123",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABC12o3",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          },
          {
            code: "ABC1g23",
            frais: 0,
            commission: 0,
            date: "2025-04-08T16:07:07.473Z"
          }
        ]
      }
    }
  ]
};





const dataCreneau={
    livreurId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    creneaux: [
      {
        creneau: {
          "debut": "2025-04-06",
          "fin": "2025-04-06"
        },
        progressions: [
          {
            jour: "LUNDI",
            progression: 0,
            heure: 0,
            commission: 0
          },
          {
            jour: "MARDI",
            progression: 75,
            heure: 7,
            commission: 2000
          },
          {
            jour: "JEUDI",
            progression: 55,
            heure: 5,
            commission: 1000
          }
        ]
      }
    ]
  }

  const columns = [
    {
      key: "jour",
      label: "Jour",
    },
    {
      key: "progression",
      label: "Progression du jour",
    },
    {
      key: "commission",
      label: "commission du Jour",
    },
  ];
  
  export default function TableCreneau({initialData}:{initialData:Progression[]}) {
    const [open, setOpen] = useState<boolean>(false);
        

    const renderCell = React.useCallback((data:Progression, columnKey:any) => {
      // const cellValue = rows[columnKey];

      switch (columnKey) {
        case "jour":
          return (
          <div>
            {data.jour||'non definie'}
          </div>
          );
        case "progression":
          return (
            <div className="flex gap-2">
              {progresseBarePerformance(data)}
              <span>{data.progression} %</span>
              <span>{data.heure} de travail</span>
            </div>
          );
        case "commission":
          return (
            <div>
            {data.commission} FCFA
            </div>
          );
        default:
          return null;
      }
    }, []);


    return (
      <div>
          <Table aria-label="Example table with custom cells"  selectionMode="single">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={initialData} emptyContent={<EmptyDataTable title="Aucun  Livreur" />}>
        {(item) => (
          <TableRow key={item.jour} onClick={() => setOpen(true)}>
            {(columnKey) => <TableCell >{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <DropDownPerformanceCrenea open={open} setOpen={setOpen} gainsData={gainsData}/>

      </div>
    
    );
  }
