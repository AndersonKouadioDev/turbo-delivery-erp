import { useEffect, useState } from "react";


const initialData = [
    { id: 1, name: "Judicahéle yao", date: "Inscrit le : 13/03/2024", restaurant: "KFC", confirmed: true },
    { id: 2, name: "Laurant pechou", date: "Inscrit le : 15/03/2024", restaurant: "TSUNAMI", confirmed: true },
    { id: 3, name: "Theodore koffie", date: "Inscrit le : 15/03/2024", restaurant: "KFC", confirmed: true },
    { id: 4, name: "Baptiste froment", date: "Inscrit le : 17/03/2024", restaurant: "TSUNAMI", confirmed: true },
    { id: 5, name: "Maurice coulange", date: "Inscrit le : 18/03/2024", restaurant: "KFC", confirmed: true },
];


interface Props {
    searchKey: string;
}
export function useTurboysBirdController({ searchKey }: Props) {
    const [data, setData] = useState(initialData);
    const [selectValue, setSelectValue] = useState("");

    useEffect(() => {
        if (searchKey) {
            setData(initialData.filter(item =>
                item.name?.toLowerCase().includes(searchKey?.toLowerCase()) ||
                item.restaurant?.toLowerCase().includes(searchKey?.toLowerCase())));
        } else {
            setData(initialData);
        }

    })

    const toggleConfirm = (id: any) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, confirmed: !item.confirmed } : item
            )
        );
    };

    return {
        data,
        toggleConfirm,
        selectValue,
        setSelectValue,
        initialData,
    }
}