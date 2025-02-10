import EmptyState from "@/components/commons/EmptyState";
import { SelectField } from "@/components/commons/form/select-field";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { ArrowUp, Calendar, CircleX, Edit, Home, NotepadText, Printer, User } from "lucide-react";
import Link from "next/link";

const data = [
    {
        id: '1',
        name: "Livraison 1",
        proprietaire: "ABC123",
        cout: "1500 Fcfa",
        status: "En cours",
        periode: "2022-01-01",
        user: {
            id: 1,
            name: "John Doe",
            avatar: "https://example.com/avatar1.jpg"
        }
    },
    {
        id: '2',
        name: "Livraison 2",
        proprietaire: "XYZ456",
        cout: "2000 Fcfa",
        status: "En cours",
        periode: "2022-02-01",
        user: {
            id: 2,
            name: "Jane Smith",
            avatar: "https://example.com/avatar2.jpg"
        }
    }
]

export function ListeDesLivraisons() {

    const colomns = [
        {
            accessorKey: "periode",
            header: () => {
                return (
                    <div className="flex">
                        <Calendar className="mr-2" size={15} /> Periode
                    </div>

                )
            },
            cell: ({ row }: any) => {
                return (
                    <Link href={`/${row.original.id}/releve-de-paie`}>
                        <div className="flex items-center">
                            <CircleX className="mr-2 bg-red-500 rounded-full p-0 text-white border-none" size={15} />
                            {row.original.periode}
                        </div>
                    </Link>
                );
            },
        },
        {
            accessorKey: "proprietaire",
            header: () => {
                return (
                    <div className="flex">
                        <Home className="mr-2" size={15} /> Propriétaire
                    </div>
                )
            },
            cell: ({ row }: any) => {
                return (
                    <Link href={`/${row.original.id}/releve-de-paie`}>
                        <div className="flex items-center">
                            {row.original.proprietaire}
                        </div>
                    </Link>
                );
            },
        },
        {
            accessorKey: "cout",
            header: () => {
                return (
                    <div className="flex">
                        <NotepadText className="mr-2" size={15} /> Coût de livraison
                    </div>
                )
            },
            cell: ({ row }: any) => {
                return (
                    <Link href={`/${row.original.id}/releve-de-paie`}>
                        <div className="flex items-center">
                            {row.original.cout} Fcfa
                        </div>
                    </Link>

                )
            },
        }
    ];

    const avatarFallback = (nomComplet?: string) => {
        if (nomComplet) {
            const name = nomComplet.split(" ");
            if (name.length > 1) {
                return name[0].charAt(0);
            }
            return nomComplet.charAt(0);
        }
    };
    return (
        <>
            <div className="flex flex-wrap mt-10 gap-4 lg:flex-row md:flex-col sm:flex-col">
                {/* Profil */}
                <div className="pt-10 w-full lg:w-1/4">
                    <div className="text-2md font-bold text-center text-red-500 pt-2">
                        <span className="flex gap-2 items-center justify-center">
                            <User className="mr-2" size={15} /> Profile
                        </span>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6">
                            <Avatar className="w-16 h-16">
                                <AvatarFallback className="bg-red-500 p-0 text-md text-white rounded-full">
                                    {avatarFallback("KRAH Éric")}
                                </AvatarFallback>
                            </Avatar>
                            <p className="mt-2 text-lg font-semibold text-gray-900">KRAH Éric</p>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-500">Total général</p>
                                <p className="text-xl font-bold text-red-600">117 800 F CFA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tableau */}
                <div className="flex-1">
                    <DataTable.Root columns={colomns} data={data}>
                        <div className="flex items-center justify-end">
                            <div className="flex gap-4 items-center">
                                <DataTable.SearchInput />
                            </div>
                        </div>
                        <DataTable.Table />
                        <DataTable.Empty>
                            <EmptyState title={""} subtitle={"Aucune donnée n'est disponible actuellement"} />
                        </DataTable.Empty>
                    </DataTable.Root>
                </div>
            </div>

            <div className="flex justify-between flex-wrap mt-20">
                <div className="flex gap-4">
                    <span> Nombre de jour</span>
                    <Button className="h-6 pl-4 pr-4" variant={"success"}>{data.length} Jour(s)</Button>
                    <div className="flex gap-4">Net à payer <span className="text-green-500 font-bold flex gap-2"><ArrowUp className="mr-2" /> {data.map((item) => {
                        const coutTotal = 0;
                        const cout = coutTotal + item.cout
                        return cout;
                    })[0]} </span> FCFA</div>
                </div>
                <div className="flex pt-0 flex-wrap gap-2 sm:pt-4 lg:pt-0 md:pt-0 xl:pt-0">
                    <Button className="h-8" variant={"slate"}>
                        <Edit className="mr-2" /> Modifier
                    </Button>
                    <Button className="h-8" variant={"default"}>
                        <Printer className="mr-2" /> Imprimer
                    </Button>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-10">
                <SelectField options={[
                    {
                        label: "Tous",
                        value: "all",
                    }
                ]} optionLabel={"label"} optionValue={"value"} placeholder="Afficher par profil" className="w-full" label="Afficher par profil" />
                <SelectField options={[
                    {
                        label: "En cours",
                        value: "en_cours",
                    }
                ]} optionLabel={"label"} optionValue={"value"} placeholder="Selectionnée une période" className="w-full" label="Selection une période enregistré" />
            </div>
        </>
    )
}
