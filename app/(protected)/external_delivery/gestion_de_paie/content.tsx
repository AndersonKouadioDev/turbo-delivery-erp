'use client'
import { CardHeader } from "@/components/commons/card-header";
import { PeriodeDePaie } from "@/components/dashboard/gestion-de-paie/periode-de-paie";
import { periode, useGestionPaieController } from "./controller";
import { TableauDePaie } from "@/components/dashboard/gestion-de-paie/tableau-de-paie/tableau-de-paie";
import { SearchField } from "@/components/commons/form/search-field";

interface ContentProps {
    initialData: any[]
}
export default function Content({ initialData }: ContentProps) {
    const ctrl = useGestionPaieController()
    return (
        <>
            <CardHeader title="Fiche de paie" />
            <PeriodeDePaie dayOfMonths={ctrl.dayOfMonth}
                selectedPeriodIndex={ctrl.selectedPeriodIndex}
                setSelectedPeriodIndex={ctrl.setSelectedPeriodIndex}
                dayOfWeek={ctrl.dayOfWeek}
                days={ctrl.days}
                handlePrevious={ctrl.handlePrevious}
                handleNext={ctrl.handleNext}
                setDays={ctrl.setDays} />
            <SearchField searchKey={ctrl.searchKey} onChange={ctrl.setSearchKey} />
            <TableauDePaie initialData={initialData} periode={periode[ctrl.selectedPeriodIndex]} searchKey={ctrl.searchKey} />
        </>
    )
}

