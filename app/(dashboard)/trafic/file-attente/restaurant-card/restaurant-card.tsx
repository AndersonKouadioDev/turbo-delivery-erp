"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const restaurants = [
    { id: 1, name: "Restaurant AGHA", logo: "logo1.png", users: ["user1.jpg", "user2.jpg", "user3.jpg"], active: true },
    { id: 2, name: "Restaurant LE CHA", logo: "logo2.png", users: ["user4.jpg", "user5.jpg", "user6.jpg"], active: false },
    { id: 3, name: "Restaurant SMASH", logo: "logo3.png", users: ["user7.jpg", "user8.jpg"], active: false },
    { id: 4, name: "Restaurant AMORE", logo: "logo4.png", users: ["user9.jpg", "user10.jpg", "user11.jpg"], active: false },
    { id: 5, name: "Restaurant AMORE", logo: "logo4.png", users: ["user9.jpg", "user10.jpg", "user11.jpg"], active: false },
];

export default function RestaurantCards() {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <div className="text-gray-500 pt-2">Accès rapîde</div>
            <div className="flex flex-wrap gap-4">
                {restaurants.map((restaurant) => (
                    <Card
                        key={restaurant.id}
                        className={`relative p-4 w-full sm:w-60 h-auto rounded-lg transition-all cursor-pointer shadow-md ${selected === restaurant.id
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "bg-gray-200"
                            }`}
                        onClick={() => setSelected(restaurant.id)}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Avatar className="w-6 h-6">
                                <AvatarImage src={"/assets/images/photos/galaxy.png"} alt={restaurant.name} />
                            </Avatar>
                            <span className="font-semibold">{restaurant.name}</span>
                        </div>
                        <div className="flex -space-x-2 mb-4 pt-4">
                            {restaurant.users.map((user, index) => (
                                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                                    <AvatarImage src={"https://cdn-icons-png.flaticon.com/512/2499/2499292.png"} alt="User" />
                                </Avatar>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

