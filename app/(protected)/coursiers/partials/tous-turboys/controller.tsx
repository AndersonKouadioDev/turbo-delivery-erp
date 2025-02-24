import { SelectField } from "@/components/commons/select-field";
import { Badge } from "@/components/ui/badge";
import { colorMap } from "@/data";
import { Phone, User } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";

interface Props {
    searchKey: string;
}

export const columns = [
    { uid: "nomPrenom", name: "Prénom et nom", icon: User },
    { uid: "phone", name: "Telephone", icon: Phone },
    { uid: "etatCompte", name: "Etatde compte" },
    { uid: "identification", name: "Identification du livreur" },
    { uid: "proprietaire", name: "Propriétaire" },
];

export const users = [
    {
        id: 1,
        nomPrenom: "Tony Reichert",
        phone: "2536125369",
        etatCompte: "active",
        identification: "en attente",
        status: "en_attente",
        compteStatus: "en_attente"
    },
    {
        id: 2,
        nomPrenom: "Rachel Glover",
        phone: "2536125368",
        etatCompte: "inactive",
        identification: "assigné",
        status: "assigne",
        compteStatus: "activé"
    },
    {
        id: 3,
        nomPrenom: "Darryl Fitzpatrick",
        phone: "2536125367",
        etatCompte: "Rejeté",
        identification: "Bird",
        status: "bird",
        compteStatus: "rejete"
    },
    {
        id: 4,
        nomPrenom: "Natalie Hartley",
        phone: "2536125366",
        etatCompte: "valide",
        identification: "assigné",
        status: "assigne",
        compteStatus: "valide"
    },
    {
        id: 5,
        nomPrenom: "Joshua Glover",
        phone: "2536125365",
        etatCompte: "Activé",
        identification: "Bird",
        status: "bird",
        compteStatus: "active"
    },
    {
        id: 6,
        nomPrenom: "Christopher Crooks",
        phone: "2536125364",
        etatCompte: "En attente",
        identification: "En attente",
        status: "en_attente",
        compteStatus: "en_attente"
    }

];

export const options = [
    { key: "libre-identifier-le", label: "Libre, identifier-le" },
    { key: "peut-etre-utilise", label: "Peut-être utilisé partout" },
    { key: "restaurant-agha", label: "Restaurant AGAHA" },
];
export function useTousTurboysController({ searchKey }: Props) {
    const [selectValue, setSelectValue] = useState("");
    const [filterData, setFilterData] = useState<any[]>([]);

    useEffect(() => {
        const filteredData = users.filter((user) =>
            user?.nomPrenom?.toLowerCase().includes(searchKey?.toLowerCase())
        );
        if (searchKey) {
            setFilterData(filteredData);
        } else {
            setFilterData(users);
        }
    }, [searchKey]);

    const statutColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-300 border-none";
            case "rejete":
                return "bg-red-300 border-none";
            case "valide":
                return "bg-red-300 border-none";
            case "en_attente":
                return "bg-warning-300 border-none";
            case "assigne":
                return "bg-purple-300 border-none";
            case "bird":
                return "bg-blue-300 border-none";
            default:
                return "bg-blue-300 border-none";
        }
    }


    const renderCell = React.useCallback((user: any, columnKey: any) => {
        const cellValue = user[columnKey];
        const initial = user.nomPrenom?.charAt(0).toUpperCase();
        const bgColor = colorMap[initial] || "bg-gray-400";
        switch (columnKey) {
            case "nomPrenom":
                return (
                    <div className="flex justify-between w-full">
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${bgColor}`}>
                                {initial}
                            </div>
                            <div className="text-gray-800 font-medium">{user.nomPrenom}</div>
                        </div>
                    </div>
                );
            case "etatCompte":
                return (
                    <Badge className={`${statutColor(user.compteStatus)} text-md cursor-pointer text-gray-500`} variant={"square"}>{user.etatCompte}</Badge>
                );
            case "identification":
                return (
                    <Badge className={`${statutColor(user.status)} text-md cursor-pointer text-gray-500`} variant={"square"}>{user.identification}</Badge>
                );
            case "proprietaire":
                return (
                    <SelectField options={options} setSelectValue={setSelectValue} />
                );
            default:
                return cellValue;
        }
    }, []);

    return {
        filterData,
        renderCell,
        selectValue,
        setSelectValue,
        columns,
        searchKey,
    }
}