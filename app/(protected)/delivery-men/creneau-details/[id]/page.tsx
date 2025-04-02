
export interface Turboys  {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  telephone: string;
  domicile: string;
  email: string;
  typeDocument: string;
  numeroDocument: string;
  type: string;
  nomVehicule: string;
  immatriculationVehicule: string;
}
import { CreneauID } from "@/types/creneau-byId";
import Content from "./content";
import { LivreurDetail } from "@/types/livreur";
import { getInfoLivreurById} from "@/src/livreurInfo/livreur-info.action";
import { getCreneauById } from "@/src/creneau-livreur/creneau-livreur.action";
interface TurboysPageProps {
  params: { id: string }; // Définit explicitement le type
}


const userDetail: LivreurDetail = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  nom: "Doe",
  prenoms: "John",
  telephone: "+2250123456789",
  avatarUrl: "https://example.com/avatar.jpg",
  email: "johndoe@example.com",
  birthDay: "1990-05-15",
  gender: "HOMME",
  numeroCni: "CNI123456789",
  habitation: "Abidjan, Côte d'Ivoire",
  immatriculation: "IVR12345",
  matricule: "JD12345",
  deleted: false,
  type: "WAITING", // Peut être "WAITING", "ACTIVE", etc.
  cniUrlR: "https://example.com/cni_r.jpg",
  cniUrlV: "https://example.com/cni_v.jpg",
  status: 1 // Par exemple, 1 pour un utilisateur actif
};
  

  const dataCreneau: CreneauID[] = [
    {
      id: "1a2b3c4d-1234-5678-9101-112131415161",
      debut: "2025-04-01",
      fin: "2025-05-01",
      semainePassee: true
    },
    {
      id: "2b3c4d5e-2234-5678-9101-112131415162",
      debut: "2025-04-02",
      fin: "2025-04-02",
      semainePassee: false
    },
    {
      id: "3c4d5e6f-3234-5678-9101-112131415163",
      debut: "2025-04-03",
      fin: "2025-04-03",
      semainePassee: false
    },
    {
      id: "4d5e6f7g-4234-5678-9101-112131415164",
      debut: "2025-04-04",
      fin: "2025-04-04",
      semainePassee: true
    },
    {
      id: "5e6f7g8h-5234-5678-9101-112131415165",
      debut: "2025-04-05",
      fin: "2025-04-05",
      semainePassee: false
    },
    {
      id: "6f7g8h9i-6234-5678-9101-112131415166",
      debut: "2025-04-06",
      fin: "2025-04-06",
      semainePassee: true
    },
    {
      id: "7g8h9i0j-7234-5678-9101-112131415167",
      debut: "2025-04-07",
      fin: "2025-04-07",
      semainePassee: false
    },
    {
      id: "8h9i0j1k-8234-5678-9101-112131415168",
      debut: "2025-04-08",
      fin: "2025-04-08",
      semainePassee: true
    },
    {
      id: "9i0j1k2l-9234-5678-9101-112131415169",
      debut: "2025-04-09",
      fin: "2025-04-09",
      semainePassee: false
    },
    {
      id: "0j1k2l3m-0234-5678-9101-112131415170",
      debut: "2025-04-10",
      fin: "2025-04-10",
      semainePassee: true
    },
    {
      id: "1k2l3m4n-1234-5678-9101-112131415171",
      debut: "2025-04-11",
      fin: "2025-04-11",
      semainePassee: false
    },
    {
      id: "2l3m4n5o-2345-6789-9010-123456789012",
      debut: "2025-04-12",
      fin: "2025-04-12",
      semainePassee: false
    }
  ];
    

export default async function UserPage({ params }: TurboysPageProps) {
  const { id } = await params; // Récupère l'ID depuis l'URL
  // const user = userData.find(item => item.id === id);
  const user= await getInfoLivreurById(id)

  const dataCreneau = await getCreneauById(id)

  if (!user) {
    return <div>Aucun utilisateur trouvé</div>;
  }  

  console.log({u:user});
  
  return <Content user={userDetail} dataCreneau={dataCreneau}/>;
}
