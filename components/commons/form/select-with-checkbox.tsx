// import { useState } from "react";


// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { colorMap } from "@/src/schemas/utilitise";


// interface SelectWithCheckboxProps {
//     className?: string;
//     placeholder?: string;
//     options: any[];
//     onChange?: (selectedOptions: any) => void;
//     disabled?: boolean;
// }
// export function SelectWithCheckbox(props: SelectWithCheckboxProps) {
//     const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

//     const toggleOption = (id: number) => {
//         setSelectedOptions((prev) =>
//             prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//         );
//     };

//     return (
//         <Popover>
//             <PopoverTrigger asChild>
//                 <Button variant="outline" className="w-64 justify-between">
//                     {selectedOptions.length > 0
//                         ? props.options
//                             .filter((opt) => selectedOptions.includes(opt.id))
//                             .map((opt) => opt.label)
//                             .join(", ")
//                         : "Afficher pas profil"}
//                     <ChevronDown className="ml-2 h-4 w-4" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-64 p-2 bg-white border border-gray-200 rounded-md shadow-md">
//                 {props.options.map((option) => {
//                     const initial = option.label?.charAt(0).toUpperCase();
//                     const bgColor = colorMap[initial] || "bg-gray-400";
//                     return (
//                         <div key={option.id} className="flex items-center gap-4 py-1 px-2 hover:bg-gray-100 rounded-md cursor-pointer p-4">
//                             <span className={`${bgColor} text-sm rounded-full w-5 text-center text-white h-auto mb-2`}>{initial}</span>
//                             <span className="text-sm">{option.label}</span>

//                             <span className="absolute right-0">
//                                 <Checkbox
//                                     checked={selectedOptions.includes(option.id)}
//                                     onCheckedChange={() => toggleOption(option.id)}
//                                     className="mr-2"
//                                 />
//                             </span>
//                         </div>
//                     );
//                 })}
//             </PopoverContent>
//         </Popover>
//     );
// }

"use client";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Card } from "@nextui-org/card";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";


interface SelectWithCheckboxProps {
    className?: string;
    placeholder?: string;
    options: any[];
    onChange?: (selectedOptions: any) => void;
    disabled?: boolean;
    selected: string[];
    setSelected: (selected: any) => void;
    confirmer?: () => void;
}
export function SelectWithCheckbox(props: SelectWithCheckboxProps) {
    const toggleSelection = (name: any) => {
        props.setSelected((prev: any) =>
            prev.includes(name) ? prev.filter((n: any) => n !== name) : [...prev, name]
        );
    };

    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button className="w-64 bg-white border border-gray-300 text-gray-700">
                    {props.selected.length > 0
                        ? props.selected.join(", ")
                        : "Sélectionner des utilisateurs"}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Card className="p-4 w-64 shadow-lg border border-red-300">
                    <h3 className="text-red-500 font-semibold mb-2">Sélection</h3>
                    <div className="space-y-2">
                        {props.options.map(({ name, color }) => (
                            <div key={name} className="flex items-center gap-2">
                                <div className={`${color} text-white w-6 h-6 rounded-full text-center`} >
                                    {name.charAt(0)}
                                </div>
                                <span className="flex-1 text-sm">{name}</span>
                                <Checkbox
                                    isSelected={props.selected.includes(name)}
                                    onChange={() => toggleSelection(name)}
                                    color="danger"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <Button variant="flat" color="default" >
                            Annuler
                        </Button>
                        <Button color="danger" onPress={props.confirmer}>Confirmer</Button>
                    </div>
                </Card>
            </PopoverContent>
        </Popover>
    );
}
