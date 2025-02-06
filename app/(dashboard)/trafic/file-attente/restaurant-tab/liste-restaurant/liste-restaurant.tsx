
import Link from "next/link";

interface Props {
    datas: any[]
}
export function ListeRestaurants({ datas }: Props) {
    return (
        <div className="container mx-auto">
            <div className="w-full mt-4 bg-white rounded-lg p-4">
                <div className="grid grid-cols-4 font-semibold text-gray-500 p-2 border-b">
                    <span>Rang</span>
                    <span>Nom et prénoms</span>
                    <span>Numéro livreur</span>
                </div>
                {datas.map((item: any) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-4 items-center gap-4 p-3 border-b cursor-pointer hover:bg-gray-200"
                    >
                        <span className="px-3 py-1 rounded-lg border-3 hover:border-white card text-sm">
                            {item.rang}
                        </span>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <span className="font-semibold">{item.nomPrenom}</span>
                        </div>
                        <span className="text-red-500 font-bold">{item.numero}</span>
                        <Link href={"/trafic/file-attente/" + item.id}>
                            <span className="text-blue-500 text-right">Ajourner</span>
                        </Link>

                    </div>
                ))}
            </div>
        </div>

    )
}
