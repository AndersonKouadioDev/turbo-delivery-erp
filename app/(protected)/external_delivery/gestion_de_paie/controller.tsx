import { useDisclosure } from "@heroui/react";
import { useState } from "react";

export const periode = [
    "1 fév - 7 fév",
    "8 fév - 14 fév",
    "15 fév - 21 fév",
    "22 fév - 28 fév",
    "29 fév - 5 avr",
    "6 avr - 12 avr",
    "13 avr - 19 avr",
    "20 avr - 26 avr",
    "27 avr - 5 mai",
    "6 mai - 12 mai",
    "13 mai - 19 mai",
    "20 mai - 26 mai",
    "27 mai - 5 juin",
    "6 juin - 12 juin",
    "13 juin - 19 juin",
    "20 juin - 26 juin",
];
export interface DayOfMonth {
    day: number;
    isWorking: boolean;
    currentday: boolean;
}
const dayOfMonth: DayOfMonth[] = [
    {
        day: 1,
        isWorking: true,
        currentday: true,
    },
    {
        day: 2,
        isWorking: true,
        currentday: true,
    },
    {
        day: 3,
        isWorking: true,
        currentday: true,
    },
    {
        day: 4,
        isWorking: true,
        currentday: true,
    },
    {
        day: 5,
        isWorking: true,
        currentday: true,
    },
    {
        day: 6,
        isWorking: true,
        currentday: true,
    },
    {
        day: 7,
        isWorking: true,
        currentday: true,
    },
    {
        day: 8,
        isWorking: false,
        currentday: true,
    },
    {
        day: 9,
        isWorking: false,
        currentday: true,
    },
    {
        day: 10,
        isWorking: false,
        currentday: false,
    },
    {
        day: 11,
        isWorking: false,
        currentday: false,
    },
    {
        day: 12,
        isWorking: false,
        currentday: false,
    },
    {
        day: 13,
        isWorking: false,
        currentday: false,
    },
    {
        day: 14,
        isWorking: false,
        currentday: false,
    },
    {
        day: 15,
        isWorking: false,
        currentday: false,
    },
    {
        day: 16,
        isWorking: false,
        currentday: false,
    },
    {
        day: 17,
        isWorking: false,
        currentday: false,
    },
    {
        day: 18,
        isWorking: false,
        currentday: false,
    },
    {
        day: 19,
        isWorking: false,
        currentday: false,
    },
    {
        day: 20,
        isWorking: false,
        currentday: false,
    },
    {
        day: 21,
        isWorking: false,
        currentday: false,
    },
    {
        day: 22,
        isWorking: false,
        currentday: false,
    },
    {
        day: 23,
        isWorking: false,
        currentday: false,
    },
    {
        day: 24,
        isWorking: false,
        currentday: false,
    },
    {
        day: 25,
        isWorking: false,
        currentday: false,
    },
    {
        day: 26,
        isWorking: false,
        currentday: false,
    },
    {
        day: 27,
        isWorking: false,
        currentday: false,
    },
    {
        day: 28,
        isWorking: false,
        currentday: false,
    },
    {
        day: 29,
        isWorking: false,
        currentday: false,
    },
    {
        day: 30,
        isWorking: false,
        currentday: false,
    }
]

export const dayOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"

]
export function useGestionPaieController() {
    const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);

    const handlePrevious = () => {
        setSelectedPeriodIndex((prev) => (prev > 0 ? prev - 1 : periode.length - 1));
    };

    const handleNext = () => {
        setSelectedPeriodIndex((prev) => (prev < periode.length - 1 ? prev + 1 : 0));
    };

    const [days, setDays] = useState("Lundi");
    const [searchKey, setSearchKey] = useState("");

    const handleChange = (event: any) => {
        setSearchKey(event.target.value);
    }
    return {
        periode,
        dayOfMonth,
        dayOfWeek,
        setDays,
        days,
        searchKey,
        handleChange,
        handlePrevious,
        handleNext,
        selectedPeriodIndex,
        setSelectedPeriodIndex,
        setSearchKey
    }
}