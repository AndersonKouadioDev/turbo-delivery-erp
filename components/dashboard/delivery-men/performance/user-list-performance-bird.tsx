'use client';
import { Button, CircularProgress } from '@heroui/react';
import fnPerformance from './fn-performance';
import DropDownActionPerformance from './drop-down-action-performance';
import fnProgressionPerformance from './fn-progressive-performance';

interface props {
  data: LivreurPerformanceBirdEndTorubo[];
}
export default function UserListPerformanceBird({ data }: props) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((item) => {
        //   const fnData=()=>{

        //     const mois = item.creneau.debut?.substring(5, 7);
        //     const jourDebut = item.creneau.debut?.substring(8, 10);
        //     const jourFin = item.creneau.fin?.substring(8, 10);

        //     let moi

        //     const fnMois=()=>{
        //         switch(mois) {
        //             case "01":
        //              return moi="Janv"
        //               break;
        //             case "02":
        //               return moi="Fev"
        //               break;
        //               case "03":
        //                 return moi="Mars"
        //                 break;
        //             case '04':
        //                 return moi="Avril"
        //                 break;
        //             case '05':
        //                 return moi="Mais"
        //                 break;
        //             case "06":
        //                 return moi="Juin"
        //                 break;
        //             case "07":
        //                 return moi="Jull"
        //                 break;
        //             case "08":
        //                 return moi="Aout"
        //                 break;
        //             case "09":
        //                 return moi="Sept"
        //                 break;
        //             case "10":
        //                 return moi="Oct"
        //                 break;
        //                 case "11":
        //                 return moi="Nov"
        //                 break;
        //             case "12":
        //                 return moi="Des"
        //                 break;
        //             default:
        //               // code block
        //           }
        //     }

        //     fnMois()

        //     return  `Créneau ${jourDebut}-${jourFin} ${moi} (${turboys.jour.jourTravaille}/7jours)`
        // }

        const jour=item.etats.map((item, index)=>item)

        return (
          <div key={item.id} className="w-ful px-5 py-2 flex justify-between items-center  border-2 rounded-2xl">
            <div className="flex items-center w-1/6">
              {/* <Avatar isBordered radius="full" size="md" src={undefinedRestaurant.logo_Url} /> */}
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <p className="font-semibold">{item.nomComplet}</p>
            </div>
            <div className="w-2/6 flex gap-2">
              <span>En cours</span>
              {item.etats.map((item, index) => {
                const lettre = item.jour[0];
                const isDatePassed = (dateStr: string) => {
                  // Convertir la chaîne de caractères en objet Date
                  const date = new Date(dateStr);

                  // Obtenir la date actuelle
                  const currentDate = new Date();

                  // Comparer les dates (en supprimant l'heure pour une comparaison par jour uniquement)
                  currentDate.setHours(0, 0, 0, 0); // Réinitialiser l'heure à 00:00:00
                  date.setHours(0, 0, 0, 0); // Réinitialiser l'heure de la date donnée à 00:00:00

                  return currentDate > date; // Si la date actuelle est après la date donnée, elle est passée
                };
                const fnStyle = () => {
                  if (item.statut == 'VALIDE') return 'warning';
                  if (item.statut == 'MANQUE') return 'danger';
                  if (item.statut == 'NON_DEMARRE') return 'default';
                };
                return (
                  <div key={index}>
                    <Button isIconOnly aria-label="Like" size='sm' color={fnStyle()}>
                      {lettre}
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="w-1/6 flex gap-2 items-center">
              {fnProgressionPerformance(item)}
              {/* <CircularProgress color="success" showValueLabel={true} size="lg" value={item.performance} /> */}
              <span>Performance {fnPerformance(item)} </span>
            </div>

            <div className="w-1/12">
              <h3>Commision</h3>
              <h4 className="text-lg">{item.commission}</h4>
            </div>

            <div className="w-1/12">
              <h3>Prime</h3>
              <h4 className="text-lg">{item.prime}</h4>
            </div>

            <div className="w-1/7">
              <DropDownActionPerformance id={item.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
