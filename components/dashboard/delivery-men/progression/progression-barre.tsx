import { Livreur } from "@/types/creneau-turbo";
import { Progress } from "@heroui/react"

// :{turboys:Livreur}
  const progresseBare =(turboys:Livreur)=>{

    const fnData=()=>{

        const mois = turboys.creneauVM.jourDebut?.substring(5, 7);
        const jourDebut = turboys.creneauVM.jourDebut?.substring(8, 10);
        const jourFin = turboys.creneauVM.jourFin?.substring(8, 10);
         
        let moi

        const fnMois=()=>{
            switch(mois) {
                case "01":             
                 return moi="Janv"
                  break;
                case "02":
                  return moi="Fev"
                  break;
                  case "03":
                    return moi="Mars"
                    break;
                case '04':
                    return moi="Avril"
                    break;
                case '05':
                    return moi="Mais"
                    break;
                case "06":
                    return moi="Juin"
                    break;
                case "07":
                    return moi="Jull"
                    break;
                case "08":
                    return moi="Aout"
                    break;
                case "09":
                    return moi="Sept"
                    break; 
                case "10":
                    return moi="Oct"
                    break; 
                    case "11":
                    return moi="Nov"
                    break; 
                case "12":
                    return moi="Des"
                    break; 
                default:
                  // code block
              }
        }

        fnMois()
       

    
        return  `Créneau ${jourDebut}-${jourFin} ${moi} (${turboys.jour.jourTravaille}/7jours)`
    }



       if(turboys.jour.jourTravaille===7){
               return <Progress label={fnData()}  color="success" className="max-w-md"  value={100} />
               }
        if(turboys.jour.jourTravaille<7 && turboys.jour.jourTravaille>3){
            return <Progress label={fnData()}  color="warning" className="max-w-md"  value={65} />
            }
        if(turboys.jour.jourTravaille<=3){
            
            return <Progress  label={fnData()} color="danger" className="max-w-md"  value={20} />
            }


            // if(progression==100){
            // return <Progress label={progression +'%'}   color="success" className="max-w-md"  value={100} />
            // }
            // if(progression<100 && progression>=65){
            //     return <Progress label={progression +'%'}   color="warning" className="max-w-md"  value={65} />
            //     }
            // if(progression<65){
                
            //     return <Progress label={progression +'%'}   color="danger" className="max-w-md"  value={20} />
            //     }
        }
        


export default progresseBare