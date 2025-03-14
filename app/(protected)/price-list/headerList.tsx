import { title } from '@/components/primitives';
// import { Button } from '@/components/ui/button';
import {Button} from "@heroui/react";
import { Input } from '@/components/ui/input';
import { ArrowDownToLine, Search } from 'lucide-react';


export default function HeaderList(){

    return (
          <div >
             <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestions des frais de livraison</h1>
            </div>

            <div className='py-6 flex items-center justify-between'>
            <div className="relative">
                <Search className="absolute left-3 top-2 text-gray-400" size={18} />
                <Input
                    type="text"
                    placeholder="Rechercher"
                    // value={query}
                    // onChange={handleChange}
                    // onFocus={() => setIsOpen(query.length > 0)}
                    // onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>
            
            <div className="flex pt-0 flex-wrap gap-2 sm:pt-4 lg:pt-0 md:pt-0 xl:pt-0">
                
                   
                   <Button  variant="bordered" endContent={<ArrowDownToLine />}>
                    Exporter
                   </Button>
                   <Button color="danger" endContent={<ArrowDownToLine />}>
                    Ajouter
                   </Button>
                   
                    {/* <Button className="h-8" variant={'slate'}>
                        <Edit className="mr-2" /> Modifier
                    </Button>
                    <Button className="h-8" variant={'default'}>
                        <Printer className="mr-2" /> Imprimer
                    </Button> */}
            </div>

            </div>
          </div>
    )
}