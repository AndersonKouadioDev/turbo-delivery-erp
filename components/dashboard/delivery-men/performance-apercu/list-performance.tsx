import { PerformanceCreneauId } from "@/types/performance-creneauId"
import TableCreneau from "./table-creneau"
import FakeTableCreneau from "./fake-table-creneau"




export default function ListPerformanceApercu({data}:{data:PerformanceCreneauId}){
   
   
   
    return (
        <div className="flex flex-col gap-2">
       <TableCreneau initialData={data.creneaux[0].progressions}/>
       <div className="grid gap-2 lg:grid-cols-2">
       <FakeTableCreneau/>
       <FakeTableCreneau/>
       </div>
        </div>
    )
    

}