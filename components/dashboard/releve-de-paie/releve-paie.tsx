
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DatePicker } from '@/components/ui/date-piker';
import { Tab, Tabs } from '@nextui-org/react';
import { ListeDesLivraisons } from './liste-des-livraisons/liste-des-livraisons';
export function RelevePaie() {
    const tabs = [
        { id: '1', nomComplet: 'Krah éric', montant: "125000" },
        { id: '2', nomComplet: 'N\'ndri Jena', montant: "13500" },
        { id: '3', nomComplet: 'Nguessan drissa', montant: "690000" },
        { id: '4', nomComplet: 'Siriki Yao', montant: "1680000" },
        { id: '5', nomComplet: 'Brou Kouamé', montant: "1580000" },
        { id: '6', nomComplet: 'Krah éric', montant: "125000" },
        { id: '7', nomComplet: 'N\'ndri Jena', montant: "13500" },
        { id: '8', nomComplet: 'Nguessan drissa', montant: "690000" },
        { id: '9', nomComplet: 'Siriki Yao', montant: "1680000" },
        { id: '10', nomComplet: 'Brou Kouamé', montant: "1580000" },
    ];

    const avatarFallback = (nomComplet?: string) => {
        if (nomComplet) {
            const name = nomComplet.split(" ");
            if (name.length > 1) {
                return name[0].charAt(0);
            }
            return nomComplet.charAt(0);
        }
    };

    return (
        <>
            <div className='mb-2'>
                <DatePicker />
            </div>
            <div className='relative flex items-center gap-4'>
                <Tabs items={tabs} className="w-full rounded-md shadow">
                    {(item) => {
                        return <Tab key={item.id} title={<div className='flex jsutify-between w-full'>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarFallback className='bg-red-500 p-0 w-sm text-sm text-white  rounded-full'>{avatarFallback(item.nomComplet)}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div ><span className='mr-5'>{item.nomComplet}</span></div>
                                <span className='ml-5 font-bold'>{item.montant}</span>
                            </div>

                        </div>} />;
                    }}
                </Tabs>
                <span className=' absolute right-0 bg-slate-600 text-white z-[99] p-1 rounded-lg pl-2 pr-2'>Les tops 10</span>
            </div>
            <ListeDesLivraisons />
        </>
    )
}