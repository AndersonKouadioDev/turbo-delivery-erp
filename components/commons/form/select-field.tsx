// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command"
// import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
// import clsx from "clsx";
// import { ControllerFieldState, ControllerRenderProps, UseFormReturn } from "react-hook-form"
// import { CustomLabel } from "./label"
// import FormErrorMessage from "./form-message-erreor"


// interface AtlComboProps {
//     id?: string,
//     options: any[],
//     required?: boolean,
//     className?: string,
//     placeholder?: string,
//     optionLabel?: string,
//     optionValue?: string,
//     value?: any,
//     setValue?: (value: any) => void,
//     field?: ControllerRenderProps<any, string>;
//     fieldState?: ControllerFieldState;
//     label?: string;
//     disabled?: boolean;
// }

// export function SelectField(props: AtlComboProps) {
//     const [open, setOpen] = React.useState(false)

//     function getValue(option: any) {
//         return props.optionValue ? option[props.optionValue] : option.value;
//     }

//     function getLabel(option: any) {
//         if (!option)
//             return "";
//         return props.optionLabel ? option[props.optionLabel] : option.label;
//     }

//     return (
//         <div>
//             {props.label && <CustomLabel required={props.required} htmlFor={(props.id as any)}>{props.label}</CustomLabel>}
//             <Popover open={open} onOpenChange={setOpen}>
//                 <PopoverTrigger asChild>
//                     <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={open}
//                         className={clsx("w-[200px] justify-between", {
//                             "text-gray-300": !props.value,
//                         }, props.className)}
//                         disabled={props.disabled}
//                     >
//                         {props.value
//                             ? getLabel(props.options.find((framework) => getValue(framework) === props.value))
//                             : (props.placeholder || "Sélectionner un item...")}
//                         <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                     </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className={clsx("w-[200px] p-0 w-full")}>
//                     <Command>
//                         <CommandInput placeholder="Rechercher..." />
//                         <CommandList>
//                             <CommandEmpty>Aucune donnée trouvée.</CommandEmpty>
//                             <CommandGroup>
//                                 {props.options.map((option) => (
//                                     <CommandItem
//                                         key={getValue(option)}
//                                         value={getValue(option)}
//                                         onSelect={(currentValue) => {
//                                             props.setValue && props.setValue(currentValue === props.value ? "" : currentValue)
//                                             setOpen(false)
//                                         }}
//                                     >
//                                         <Check
//                                             className={cn(
//                                                 "mr-2 h-4 w-4",
//                                                 props.value === getValue(option) ? "opacity-100" : "opacity-0"
//                                             )}
//                                         />
//                                         {getLabel(option)}
//                                     </CommandItem>
//                                 ))}
//                             </CommandGroup>
//                         </CommandList>
//                     </Command>
//                 </PopoverContent>
//             </Popover>
//             {props.fieldState && <FormErrorMessage fieldState={props.fieldState} />}
//         </div>

//     )
// }

import { Select, SelectItem } from "@heroui/select";

interface SelectFieldProps {
    id?: string,
    options: any[],
    required?: boolean,
    className?: string,
    placeholder?: string,
    optionLabel?: string,
    optionValue?: string,
    value?: any,
    setValue?: (value: any) => void,
    label?: string;
    disabled?: boolean;
}
export function SelectField(props: SelectFieldProps) {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select className="max-w-xs " label="Selectionnée une période" >
                {props.options.map((item) => (
                    <SelectItem key={item.key} aria-placeholder="selectionnée une période">{item.label}</SelectItem>
                ))}
            </Select>
        </div>
    );
}
