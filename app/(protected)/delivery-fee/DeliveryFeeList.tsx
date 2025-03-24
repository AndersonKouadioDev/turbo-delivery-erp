// 'use client';
// import { Pencil, Trash2 } from 'lucide-react';
// import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button } from '@heroui/react';
// import { DeliveryFee } from '@/types/delivery-fee.model';

// interface Props {
//     fees: DeliveryFee[];
//     onEdit: (fee: DeliveryFee) => void;
//     onDelete: (id: string) => Promise<void>;
//     isLoading: boolean;
// }

// export function DeliveryFeeList({ fees, onEdit, onDelete, isLoading }: Props) {
//     return (
//         <Table aria-label="Liste des frais de livraison" className="w-full">
//             <TableHeader>
//                 <TableColumn>ZONE</TableColumn>
//                 <TableColumn>DISTANCE (KM)</TableColumn>
//                 <TableColumn>PRIX</TableColumn>
//                 <TableColumn>COMMISION</TableColumn>
//                 <TableColumn align="start">ACTIONS</TableColumn>
//             </TableHeader>
//             <TableBody emptyContent="Aucune zone de livraison définie">
//                 {fees.map((fee) => (
//                     <TableRow key={fee.id}>
//                         <TableCell>{fee.zone}</TableCell>
//                         <TableCell>
//                             {fee.distanceDebut} - {fee.distanceFin}
//                         </TableCell>
//                         <TableCell>{fee.prix.toFixed(2)} XOF</TableCell>
//                         <TableCell>{fee.commission.toFixed(2)} XOF</TableCell>
//                         <TableCell>
//                             <div className="flex justify-end gap-2">
//                                 {/* <Button isIconOnly color="primary" variant="light" onPress={() => onEdit(fee)} isDisabled={isLoading}>
//                                     <Pencil size={20} />
//                                 </Button> */}
//                                 <Button isIconOnly color="danger" variant="light" onPress={() => onDelete(fee.id)} isDisabled={isLoading}>
//                                     <Trash2 size={20} />
//                                 </Button>
//                             </div>
//                         </TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     );
// }
