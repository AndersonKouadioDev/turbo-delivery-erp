'use client';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import Dropdown from '@/components/dropdown';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Notifications = ({ className }: { className?: string }) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const notifications = [
        {
            id: 1,
            objet: 'Restaurant Agha vient de vous enoyer une recette dans sa collection',
            description: '',
            time: '45m',
            tu: false,
            libelle: "Voir la publication"
        },
        {
            id: 2,
            objet: 'Restaurant Agha vous à laissé un commentaire',
            description: "Bonjour Turbo, le client souhaite que vous passez dans ...",
            time: '9h',
            lu: true,
            libelle: "Voir la publication"
        },
        {
            id: 3,
            objet: 'KkiPay',
            description: 'Nous sommes heureux de vous presnter les dernières modification de notre expérience et de notre modèle',
            time: '10h',
            tu: false,
            libelle: "Essayer maintenant"
        },
        {
            id: 3,
            objet: 'Vous avez exporter les rapports de la semaine',
            description: '',
            time: '10h',
            tu: true,
            libelle: "Voir la publication"
        },
    ];

    return (
        <div className={`dropdown shrink-0 ${className}`}>
            <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40  hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={<Bell />}
            >
                <ul className="lg:w-[600px] xl:w-[600px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px] !shadow-xl">
                    <li onClick={(e) => e.stopPropagation()}>
                        <div className="flex-wrap lg:flex xl:flex items-center justify-between px-4 py-2 font-semibold">
                            <h4 className="text-lg text-primary font-bold">Notification</h4>
                            <span className='text-gray-500'>Tous marquer comme lus</span>
                        </div>
                    </li>
                    <li className='mt-5 border-none'> <span className='border-b-3 border-b-red-500 mb-5 font-bold pb-1 ml-5 '>Tous 1</span></li>
                    {notifications.length > 0 ? (
                        <>
                            {notifications.map((notification) => {
                                return (
                                    <div key={notification.id}>
                                        <li className="dark:text-white-light/90 p-2 w-full cursor-pointer hover:bg-primary/10 mt-5" onClick={(e) => e.stopPropagation()}>
                                            <div className="group flex items-center px-4 py-2">
                                                <div className="grid place-content-center rounded">
                                                    <div className=" h-12 w-12 rounded-full flex items-center">
                                                        <span className="absolute  block h-2 w-2 rounded-full bg-red-500"></span>
                                                        <img className="h-12 w-12 rounded-full object-cover ml-2" alt="profile" src={`/assets/images/avata.png`} />

                                                    </div>
                                                </div>
                                                <div className="flex w-full  justify-between ltr:pl-3 rtl:pr-3 ml-2">
                                                    <div className="ltr:pr-3 rtl:pl-3">
                                                        <h6 className={`${!notification.lu && "font-[600]"}`}>{notification.objet}</h6>
                                                        {notification.description && <p>{notification.description}</p>}
                                                        {!notification.lu &&
                                                            <Button className='h-8 mt-2 mb-2 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500'>{notification.libelle}</Button>}
                                                    </div>
                                                    <div className='flex-col gap-0 items-center'>
                                                        <span className="block text-xs font-normal dark:text-gray-500">{notification.time}</span>
                                                        <button type="button"
                                                            className="  hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto font-bold text-lg -mt-2"
                                                        >
                                                            ...
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </div>
                                );
                            })}
                            <div className="p-4 text-center">
                                <span className=" font-bold text-md text-primary  w-full pl-2 pr-2 p-1 rounded-full cursor-pointer hover:bg-primary/30">Voir tous</span>
                            </div>

                        </>
                    ) : (
                        <li onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                                <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                                    <IconInfoCircle fill={true} className="h-10 w-10 text-primary" />
                                </div>
                                Acun notification trouvé !
                            </button>
                        </li>
                    )}
                </ul>
            </Dropdown>
        </div>
    );
};

export default Notifications;
