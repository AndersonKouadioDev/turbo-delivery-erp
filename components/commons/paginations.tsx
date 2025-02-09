import { Button } from "../ui/button";


interface PaginationProps {
    currentPage: number,
    setCurrentPage: (currentPage: number) => void;
    datas: any;
    prevLabel?: string;
    nexLabel?: string;
    prevPage: number;
    className?: string;
}
export function Paginations({ currentPage, setCurrentPage, datas, prevLabel, prevPage, nexLabel, className }: PaginationProps) {
    const prevL = prevLabel ? prevLabel : 'Précédent'
    const nextL = nexLabel ? nexLabel : 'Suivant'
    return (
        <div className={`flex justify-between ml-5 mr-20 ${className}`}>
            <Button onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 0}
            >{prevL}</Button>
            <Button onClick={() => setCurrentPage(currentPage + 1)}
                disabled={(currentPage + 1) * prevPage >= datas.length}
            >{nextL}</Button>
        </div>
    )
}