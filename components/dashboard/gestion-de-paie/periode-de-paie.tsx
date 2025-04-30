
import { DayOfMonth, periode } from "@/app/(protected)/external_delivery/gestion_de_paie/controller";
import { Button, Card, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface PeriodeDePaieProps {
    dayOfMonths: DayOfMonth[],
    dayOfWeek: string[];
    days: string;
    setDays: (value: string) => void,
    handlePrevious: () => void;
    handleNext: () => void;
    selectedPeriodIndex: number;
    setSelectedPeriodIndex: (value: number) => void
}
export const PeriodeDePaie = ({ dayOfMonths, handleNext, handlePrevious, selectedPeriodIndex, dayOfWeek, days, setDays, setSelectedPeriodIndex }: PeriodeDePaieProps) => {
    return (
        <div className=" mb-5 bg-white rounded-lg">
            <div className="lg:flex md:flex  xl:flex items-center  mb-4 gap-4 flex-wrap">
                <div className="text-gray-500">Période</div>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="min-w-[200px] flex justify-between items-center px-4 py-2 rounded-full border-gray-300"
                        >
                            <ChevronLeft className="text-gray-500 cursor-pointer" onClick={handlePrevious} />
                            {periode[selectedPeriodIndex]}
                            <ChevronRight className="text-gray-500 cursor-pointer" onClick={handleNext} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Périodes"
                        onAction={(key) => setSelectedPeriodIndex(periode.indexOf(key as any))}
                    >
                        {periode.map((prd) => (
                            <DropdownItem key={prd}>{prd}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown >
                    <DropdownTrigger>
                        <Button variant="bordered" className="min-w-[200px] lg:min-w-[150px] md:min-w-[150px] xl:min-w-[150px] mt-2 lg:mt-0 md:mt-0 xl:mt-0 flex justify-between rounded-full border-gray-300">{days} <ChevronDown className="text-gray-500" /></Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Périodes"
                        onAction={(key) => setDays(key as string)}
                    >
                        {
                            dayOfWeek && dayOfWeek.map((day) => (
                                <DropdownItem key={day}>{day}</DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Card className="mt-5 p-4">
                <div className="mb-4 text-sm text-gray-500 flex justify-between">
                    <span>Début du mois: 1 fév</span>
                    <span>Fin du mois: 28 fév</span>
                </div>
                <div className="flex justify-around ">
                    <div className="flex items-center gap-1 overflow-auto">
                        {dayOfMonths.map(({ day, isWorking, currentday }) => (
                            <div
                                key={day}
                                className={`min-w-8 h-auto lg:w-8 xl:w-8 md:w-8 lg:h-8 xl:h-8 md:h-8 flex items-center justify-center text-white text-sm rounded-md 
                            ${(currentday && isWorking) ? "bg-green-500" :
                                        (currentday && !isWorking) ? "bg-red-200" :
                                            "bg-gray-200"}`}
                            >
                                {
                                    (currentday && !isWorking) ?
                                        <span className={`text-red-500`}>{day}</span>
                                        : (!currentday && !isWorking) ?
                                            <span className={`text-gray-400`}>{day}</span>
                                            :
                                            <span className={`text-white-500 font-bold`}>{day}</span>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-400 flex justify-between">
                    <span>Paie en cours</span>
                    <span>Prochaine paie: Mercredi</span>
                </div>
            </Card>
        </div>
    );
};

