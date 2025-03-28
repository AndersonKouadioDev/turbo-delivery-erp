import { RestaurantTuboProgression } from '@/types/slot';
import { Pagination, Progress } from '@heroui/react';
import progresseBare from '../progression-barre';

const UserListe = ({ initialData }: { initialData: RestaurantTuboProgression[] }) => {
  
  
    return (

          <div className='flex flex-col gap-6 '>
            {
              initialData.map((item,index)=>{
             return (  
                 <div key={index}  className='border rounded-xl'>
                     <div className='px-4 pt-4 font-semibold text-lg'>{item.nonRestaurant}</div>
                     {
                       <div className="panel mt-5 overflow-hidden border-0 p-0">
                       <div className="table-responsive">
                         <table className='table-striped table-hover'>
                             <thead>
                                 <tr >
                                     <th >Nom du coursier</th>
                                     <th >Progression</th>
                                     <th >Jour</th>
                                     <th>Début</th>
                                     <th >Fin</th>
                                 </tr>
                             </thead>
                           
                           <tbody>
                             {item.livreurs.map((item) => {
                          //  const progresseBare =(item)=>{
                          //    if(item.progression==100){
                          //    return <Progress   color="success" className="max-w-md"  value={100} />
                          //    }
                          //    if(item.progression<100 && item.progression>=65){
                          //        return <Progress   color="warning" className="max-w-md"  value={65} />
                          //        }
                          //    if(item.progression<65){
                                 
                          //        return <Progress   color="danger" className="max-w-md"  value={20} />
                          //        }
                          //  }
                               return (
                                 <tr key={item.id}>
                                   <td>{item.nomComplet}</td>
                                   <td>{progresseBare(item.progression)}</td>
                                   <td>{item.jour.jourNonTravaille}/{item.jour.jourTravaille}</td>
                                   <td>{item.creneauVM.debut}</td>
                                   <td>{item.creneauVM.fin}</td>
                                 </tr>
                               );
                             })}
                           </tbody>
                         </table>
                       </div>
                       {/* <Pagination total={data?.totalPages ?? 1} page={currentPage} onChange={fetchData} showControls color="primary" variant="bordered" isDisabled={isLoading} /> */}
                 
                     </div>
                     }
                </div>
                )
              })
            }
          </div>


    // <div className="panel mt-5 overflow-hidden border-0 p-0">
    //   <div className="table-responsive">
    //     <table className='table-striped table-hover'>
    //         <thead>
    //             <tr >
    //                 <th >Nom du coursier</th>
    //                 <th >Progression</th>
    //                 <th >Jour</th>
    //                 <th>Début</th>
    //                 <th >Fin</th>
    //             </tr>
    //         </thead>
          
    //       <tbody>
    //         {initialData.map((item) => {
    //       const progresseBare =()=>{
    //         if(item.progression==100){
    //         return <Progress   color="success" className="max-w-md"  value={100} />
    //         }
    //         if(item.progression<100 && item.progression>=65){
    //             return <Progress   color="warning" className="max-w-md"  value={65} />
    //             }
    //         if(item.progression<65){
                
    //             return <Progress   color="danger" className="max-w-md"  value={20} />
    //             }
    //       }
    //           return (
    //             <tr key={item.id}>
    //               <td>{item.nomComplet}</td>
    //               <td>{progresseBare()}</td>
    //               <td>{item.jour.jourNonTravaille}/{item.jour.jourTravaille}</td>
    //               <td>{item.creneauVM.debut}</td>
    //               <td>{item.creneauVM.fin}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    //   {/* <Pagination total={data?.totalPages ?? 1} page={currentPage} onChange={fetchData} showControls color="primary" variant="bordered" isDisabled={isLoading} /> */}

    // </div>
  );
};

export default UserListe;
