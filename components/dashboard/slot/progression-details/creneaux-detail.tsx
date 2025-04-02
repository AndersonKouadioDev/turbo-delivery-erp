import { CreneauID } from '@/types/creneau-byId';
import { Skeleton } from '@heroui/react';

const CreneauxDetail = ({ dataCreneau }: { dataCreneau: CreneauID[] | null }) => {
  const estSemainePassee = (date: string): boolean => {
    const dateCible = new Date(date);
    const maintenant = new Date();

    // Obtenir le début de la semaine actuelle
    const debutSemaine = new Date(maintenant);
    debutSemaine.setDate(maintenant.getDate() - maintenant.getDay()); // Retourne au dimanche

    return dateCible < debutSemaine;
  };
  if (dataCreneau && dataCreneau.length > 0) {
    return (
      <div className="gap-2 gap-x-5 grid grid-cols-2 sm:grid-cols-3 mt-24">
        {dataCreneau.map((item: CreneauID) => {
          const style = !item.semainePassee ? 'bg-red-500 text-red-500 rounded-xl text-white py-2 px-2' : 'bg-slate-200 rounded-xl  py-2 px-2';

          // console.log( estSemainePassee(item.fin));

          return (
            <div className="flex flex-col gap-4">
              <p className="text-red-500">Plan mensuel -19 au 20 mars</p>
              <div className={style}>Créneaux du : 19-25 février</div>
            </div>
          );
        })}

        {/* <div className="w-1/3 flex flex-col gap-4">
               <p className="text-red-500">
                Plan mensuel -19 au 20 mars
               </p>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
           </div>

           <div className="w-1/3 flex flex-col gap-4">
               <p className="text-red-500">
                Plan mensuel -19 au 20 mars
               </p>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
               <div className="bg-slate-200 rounded-xl  py-2 px-2">
                 Créneaux du : 19-25 février
               </div>
           </div> */}
      </div>
    );
  } else {
    return (
      <div className="gap-2 gap-x-5 grid grid-cols-2 sm:grid-cols-3 mt-24">
    
        <div className="flex flex-col gap-4">
        <p className='text-red-500 text-lg'>Aucun creneau trouvé</p>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
        </div>

        <div className="flex flex-col gap-4">
        <p className='text-red-500 text-lg'>Aucun creneau trouvé</p>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
        </div>

        <div className="flex flex-col gap-4">
        <p className='text-red-500 text-lg'>Aucun creneau trouvé</p>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className=" bg-slate-200 rounded-xl  py-2 px-2" >
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
        </div>
   
   

      </div>
    );
  }

};

export default CreneauxDetail;
