import { Select, SelectItem } from "@heroui/react";



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
