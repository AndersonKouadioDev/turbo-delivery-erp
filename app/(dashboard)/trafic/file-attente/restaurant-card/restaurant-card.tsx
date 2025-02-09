"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { FilleAttenteHistoriqueVM, FilleAttenteVM } from "@/types/file-attente.model";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const restaurants = [
    { id: 1, name: "Restaurant AGHA", logo: "logo1.png", users: ["user1.jpg", "user2.jpg", "user3.jpg"], active: true },
    { id: 2, name: "Restaurant LE CHA", logo: "logo2.png", users: ["user4.jpg", "user5.jpg", "user6.jpg"], active: false },
    { id: 3, name: "Restaurant SMASH", logo: "logo3.png", users: ["user7.jpg", "user8.jpg"], active: false },
    { id: 4, name: "Restaurant AMORE", logo: "logo4.png", users: ["user9.jpg", "user10.jpg", "user11.jpg"], active: false },
    { id: 5, name: "Restaurant AMORE", logo: "logo4.png", users: ["user9.jpg", "user10.jpg", "user11.jpg"], active: false },
];

interface RestaurantCardsProps {
    fileAttentes: FilleAttenteHistoriqueVM[];
    refreshData?: () => void;
}
export default function RestaurantCards({ fileAttentes, refreshData }: RestaurantCardsProps) {
    const [selected, setSelected] = useState<any>(1);
    useEffect(() => {
        if (fileAttentes && fileAttentes.length > 0) {
            setSelected(fileAttentes[0]?.restaurantId ? fileAttentes[0]?.restaurantId : 1);
        }
    }, [fileAttentes])
    return (
        <>
            <div className="flex gap-20 text-gray-500 pt-2">
                <span>Accès rapîde</span>
                <span className="cursor-pointer text-red-500  hover:text-red-300" onClick={refreshData}><RefreshCcw /></span>
            </div>
            <div className="flex flex-wrap gap-4">
                {(fileAttentes && fileAttentes.length > 0) &&
                    fileAttentes.map((restaurant: FilleAttenteHistoriqueVM) => (
                        <Card
                            key={restaurant.restaurantId}
                            className={`relative p-4 w-full sm:w-60 h-auto rounded-lg transition-all cursor-pointer shadow-md ${selected === restaurant.restaurantId
                                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                                : "bg-gray-200"
                                }`}
                            onClick={() => setSelected(restaurant.restaurantId)}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src={"/assets/images/photos/galaxy.png"} alt={""} />
                                </Avatar>
                                <span className="font-semibold">{restaurant.restaurant}</span>
                            </div>
                            <div className="flex -space-x-2 mb-4 pt-4 items-center">
                                {(restaurant.fileAttentes && restaurant.fileAttentes.length > 0) &&
                                    restaurant.fileAttentes.map((user: FilleAttenteVM, index) => {
                                        if (index < 7) {
                                            return (
                                                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                                                    <AvatarImage src={"https://cdn-icons-png.flaticon.com/512/2499/2499292.png"} alt="User" />
                                                </Avatar>
                                            );
                                        }
                                    })
                                }
                                <span className="pl-4">
                                    {(restaurant.fileAttentes && restaurant.fileAttentes?.length > 3) && " ..."}
                                </span>
                            </div>
                        </Card>
                    ))}
            </div>
        </>
    );
}

