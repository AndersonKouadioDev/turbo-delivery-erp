
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
    items: any[];
}
export function SearchBar({ items }: SearchBarProps) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOpen(e.target.value.length > 0);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-2 text-gray-400" size={18} />
                <Input
                    type="text"
                    placeholder="Rechercher"
                    value={query}
                    onChange={handleChange}
                    onFocus={() => setIsOpen(query.length > 0)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                        {items
                            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
                            .map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onMouseDown={() => setQuery(item)}
                                >

                                    {item}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// "use client";
// import { useState } from "react";
// import { Input } from "@nextui-org/input";
// import { Listbox, ListboxItem } from "@nextui-org/listbox";
// import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
// import { Search } from "lucide-react";

// interface SearchBarProps {
//     items: string[];
// }

// export function SearchBar({ items }: SearchBarProps) {
//     const [query, setQuery] = useState("");
//     const [isOpen, setIsOpen] = useState(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setQuery(value);
//         // Ne pas ouvrir le popover si la recherche est vide
//         if (value.length > 0) {
//             setIsOpen(true);
//         } else {
//             setIsOpen(false);
//         }
//     };

//     return (
//         <div className="relative w-full max-w-lg mx-auto">
//             <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="bottom" className="w-full">
//                 <PopoverTrigger>
//                     <div className="relative w-full">
//                         <Input
//                             type="text"
//                             placeholder="Rechercher..."
//                             value={query}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-300 shadow-sm"
//                         />
//                         <Search className="absolute left-3 top-3 text-gray-400" size={20} />
//                     </div>
//                 </PopoverTrigger>

//                 {isOpen && (
//                     <PopoverContent className="w-full max-w-lg mt-2 bg-white border border-gray-300 rounded-xl shadow-lg">
//                         <Listbox aria-label="Résultats de recherche" className="p-3">
//                             {items.length > 0 ? (
//                                 items
//                                     .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
//                                     .map((item, index) => (
//                                         <ListboxItem
//                                             key={index}
//                                             className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md"
//                                             onClick={() => {
//                                                 setQuery(item);
//                                                 setIsOpen(false);
//                                             }}
//                                         >
//                                             {item}
//                                         </ListboxItem>
//                                     ))
//                             ) : (
//                                 <p className="text-gray-500 px-4 py-2">Aucun résultat trouvé</p>
//                             )}
//                         </Listbox>
//                     </PopoverContent>
//                 )}
//             </Popover>
//         </div>
//     );
// }

