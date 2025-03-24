import { title } from '@/components/primitives';
import TextInputToUrl from '../price-liste/searchDelivery';

export default function SectionHeader() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Créneaux</h1>
            </div>

            <div className='relative max-w-36 py-6'>
            <TextInputToUrl />
            </div>
        </div>
    );
}
