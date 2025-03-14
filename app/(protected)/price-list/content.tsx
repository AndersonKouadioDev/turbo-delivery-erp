"use client"
import { Tab, Tabs } from "@heroui/react";


export default function Content() {

const data={
    name:"Abouuu",
    id:1,
    infoLivraison:{
        zone:"Marcory",
        distance:"01_10km",
        couteDeLivraison:"999999",
        commission : "500"
    }
}

const tabs = [
    { id: '1', nomComplet: 'Agha Zone 1', },
    { id: '2', nomComplet: "ugha Zone 3",  },
    { id: '3', nomComplet: "Agha Zone 4", },
    { id: '4', nomComplet: "Agha Zone 45", },
    { id: '5', nomComplet: "Agha Zone 46",  },
    { id: '6', nomComplet: "Agha Zone 5", },
    { id: '7', nomComplet: "Agha Zone 8", },
    { id: '8', nomComplet: "Agha Zone 9", },
    { id: '9', nomComplet: "Agha Zone 90", },
    { id: '10', nomComplet: "Agha Zone 53", },
];
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

  return (
    <div className="flex w-full flex-col">
      <div className="relative flex items-center gap-4 ">
                <Tabs items={tabs} color="danger"  className="w-[90%] rounded-md shadow mr-10">
                    {(item) => {
                        return (
                            <Tab
                                key={item.id}
                                title={
                                    <div className="flex">
                                    <span className="text-gray-800 font-medium">{item.nomComplet}</span>
                                </div>
                                }
                            />
                        );
                    }}
                </Tabs>
            </div>
    </div>
  );
}
