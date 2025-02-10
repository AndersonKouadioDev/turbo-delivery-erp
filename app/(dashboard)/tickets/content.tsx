'use client';

import { title } from '@/components/primitives';
import { BonLivraison } from '@/types/bon-livraison.model';

interface ContentProps {
    data: BonLivraison[] | null;
}
export default function Content({ data }: ContentProps) {
    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestions des tickets</h1>
            </div>
        </div>
    );
}
