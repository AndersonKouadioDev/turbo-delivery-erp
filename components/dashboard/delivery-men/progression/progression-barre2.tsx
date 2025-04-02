import { Livreur } from "@/types/creneau-bird"
import { BirdPerformance } from "@/types/slot";
import { Progress } from "@heroui/react"

// :{turboys:Livreur}
  const progresseBare2 =(turboys:BirdPerformance)=>{



    //    if(turboys.jour.jourTravaille===7){
    //            return <Progress label={turboys.progression}  color="success" className="max-w-md"  value={100} />
    //            }
    //     if(turboys.jour.jourTravaille<7 && turboys.jour.jourTravaille>3){
    //         return <Progress label={turboys.progression}  color="warning" className="max-w-md"  value={65} />
    //         }
    //     if(turboys.jour.jourTravaille<=3){
            
    //         return <Progress  label={turboys.progression} color="danger" className="max-w-md"  value={20} />
    //         }

    if(turboys.id!=null||turboys.creneauVM?.debut||turboys.jour?.jourTravaille){

            if(turboys.progression==100){
            return <Progress label={turboys.progression +'%'}   color="success" className="max-w-md"  value={turboys.progression} />
            }
            if(turboys.progression<100 && turboys.progression>=65){
                return <Progress label={turboys.progression +'%'}   color="warning" className="max-w-md"  value={turboys.progression} />
                }
            if(turboys.progression<65){
                
                return <Progress label={turboys.progression +'%'}   color="danger" className="max-w-md"  value={turboys.progression} />
                }
              }

              return 'null'

        }

        
        


export default progresseBare2