import { Chip, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { CircleCheckBig, Minus } from "lucide-react";

export function useTableauDePaiController(initialData: any[], searchKey?: string) {
    const [data, setData] = useState<any[]>(initialData)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [details, setDetails] = useState<any>();
    const [nonEligible, setNonEligible] = useState<boolean>(false);

    useEffect(() => {
        if (searchKey) {
            const newData = initialData.filter((item) =>
                item?.nomComplet?.toLowerCase().includes(searchKey.toLocaleLowerCase()));
            setData(newData)
        } else {
            setData(initialData)
        }
    }, [searchKey, initialData])

    const getStatusChip = (status: string) => {
        switch (status) {
            case "Bird":
                return <Chip className="bg-primary/10 text-primary" size="sm">Bird</Chip>;
            case "Assigné":
                return <Chip className="bg-yellow-100 text-yellow-500" size="sm">Assigné</Chip>;
            default:
                return null;
        }
    };
    const conditionValidation = (items: any) => {
        const isNotValid = items.jourTravails.map(((item: any) => item.isWorking)).includes(false);
        const isNotValidWeekend = items.weekend.map((item: any) => item.isWorking).includes(false);
        switch (isNotValidWeekend) {
            case false:
                return <div className="flex"><CircleCheckBig size={20} />
                    {isNotValid && <span className="text-primary z-[40] -ml-2 -mt-2 text-3xl">*</span>}
                </div>;
            case true:
                return <Minus size={20} />;
            default: return "test"
        }
    }
    const openDetailModal = (item: any) => {
        const isNotValid = item.jourTravails.map(((item: any) => item.isWorking)).includes(false);
        setNonEligible(isNotValid)
        setDetails(item);
        onOpen();
    }
    return {
        isOpen,
        openDetailModal,
        onClose,
        details,
        conditionValidation,
        getStatusChip,
        nonEligible,
        data
    }
}