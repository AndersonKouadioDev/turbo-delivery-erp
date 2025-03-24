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
import Content from "./content";
interface TurboysPageProps {
  params: { id: string }; // Définit explicitement le type
}
const userData: Turboys[] = [
    {
      "id": "1",
      "nom": "YAO",
      "prenom": "JUDICAËL",
      "dateNaissance": "13/03/1996",
      "telephone": "2254040101",
      "domicile": "Cocody Angré",
      "email": "judicael.yao@example.com",
      "typeDocument": "Carte d'identité (CNI)",
      "numeroDocument": "CI100100100",
      "type": "Serveur",
      "nomVehicule": "Peugeot 208",
      "immatriculationVehicule": "CI100200300"
    },
    {
      "id": "2",
      "nom": "DIALLO",
      "prenom": "FATIMATA",
      "dateNaissance": "15/06/1992",
      "telephone": "2255050202",
      "domicile": "Yopougon Sideci",
      "email": "fatimata.diallo@example.com",
      "typeDocument": "Passeport",
      "numeroDocument": "CI200200200",
      "type": "Caissière",
      "nomVehicule": "",
      "immatriculationVehicule": ""
    },
    {
      "id": "3",
      "nom": "KONE",
      "prenom": "MAMADOU",
      "dateNaissance": "21/09/1993",
      "telephone": "2256060303",
      "domicile": "Adjamé Williamsville",
      "email": "mamadou.kone@example.com",
      "typeDocument": "Permis de conduire",
      "numeroDocument": "CI300300300",
      "type": "Livreur",
      "nomVehicule": "Yamaha XMAX",
      "immatriculationVehicule": "CI400500600"
    },
    {
      "id": "4",
      "nom": "OUEDRAOGO",
      "prenom": "SALIF",
      "dateNaissance": "11/02/1988",
      "telephone": "2257070404",
      "domicile": "Marcory Zone 4",
      "email": "salif.ouedraogo@example.com",
      "typeDocument": "Carte d'identité (CNI)",
      "numeroDocument": "CI400400400",
      "type": "Cuisinier",
      "nomVehicule": "Renault Kangoo",
      "immatriculationVehicule": "CI500600700"
    },
    {
      "id": "5",
      "nom": "TRAORE",
      "prenom": "AISSA",
      "dateNaissance": "30/05/1990",
      "telephone": "2258080505",
      "domicile": "Plateau Vallon",
      "email": "aissa.traore@example.com",
      "typeDocument": "Carte d'identité (CNI)",
      "numeroDocument": "CI500500500",
      "type": "Serveuse",
      "nomVehicule": "",
      "immatriculationVehicule": ""
    },
    {
      "id": "6",
      "nom": "N'DIAYE",
      "prenom": "KHALIL",
      "dateNaissance": "09/08/1991",
      "telephone": "2259090606",
      "domicile": "Treichville Arras",
      "email": "khalil.ndiaye@example.com",
      "typeDocument": "Passeport",
      "numeroDocument": "CI600600600",
      "type": "Chauffeur",
      "nomVehicule": "Toyota Hilux",
      "immatriculationVehicule": "CI600700800"
    },
    {
      "id": "7",
      "nom": "ZONGO",
      "prenom": "MARIE",
      "dateNaissance": "18/04/1989",
      "telephone": "2251010101",
      "domicile": "Koumassi Remblais",
      "email": "marie.zongo@example.com",
      "typeDocument": "Permis de conduire",
      "numeroDocument": "CI700700700",
      "type": "Livreuse",
      "nomVehicule": "Kia Picanto",
      "immatriculationVehicule": "CI700800900"
    },
    {
      "id": "8",
      "nom": "DIABY",
      "prenom": "MOUSSA",
      "dateNaissance": "27/11/1995",
      "telephone": "2252020202",
      "domicile": "Port-Bouët Gonzagueville",
      "email": "moussa.diaby@example.com",
      "typeDocument": "Passeport",
      "numeroDocument": "CI800800800",
      "type": "Serveur",
      "nomVehicule": "",
      "immatriculationVehicule": ""
    },
    {
      "id": "9",
      "nom": "KAMARA",
      "prenom": "SIRADOU",
      "dateNaissance": "14/07/1997",
      "telephone": "2253030303",
      "domicile": "Bingerville Résidentiel",
      "email": "siradou.kamara@example.com",
      "typeDocument": "Carte d'identité (CNI)",
      "numeroDocument": "CI900900900",
      "type": "Cuisinier",
      "nomVehicule": "",
      "immatriculationVehicule": ""
    },
    {
      "id": "10",
      "nom": "TANDIA",
      "prenom": "MARIAM",
      "dateNaissance": "05/03/1986",
      "telephone": "2254040404",
      "domicile": "Treichville Biafra",
      "email": "mariam.tandia@example.com",
      "typeDocument": "Permis de conduire",
      "numeroDocument": "CI1000100010",
      "type": "Livreuse",
      "nomVehicule": "Peugeot Partner",
      "immatriculationVehicule": "CI1001100110"
    },
    {
      "id": "11",
      "nom": "COULIBALY",
      "prenom": "ADAMA",
      "dateNaissance": "22/09/1994",
      "telephone": "2255050505",
      "domicile": "Cocody Danga",
      "email": "adama.coulibaly@example.com",
      "typeDocument": "Carte d'identité (CNI)",
      "numeroDocument": "CI1100110011",
      "type": "Chauffeur",
      "nomVehicule": "Nissan Navara",
      "immatriculationVehicule": "CI1101110111"
    },
    {
      "id": "12",
      "nom": "SYLLA",
      "prenom": "HADJA",
      "dateNaissance": "10/04/1998",
      "telephone": "2256060606",
      "domicile": "Marcory Anoumabo",
      "email": "hadja.sylla@example.com",
      "typeDocument": "Passeport",
      "numeroDocument": "CI1200120012",
      "type": "Hôtesse",
      "nomVehicule": "",
      "immatriculationVehicule": ""
    }
  ];


export default async function UserPage({ params }: TurboysPageProps) {
  const { id } = await params; // Récupère l'ID depuis l'URL
  const user = userData.find(item => item.id === id);

  if (!user) {
    return <div>Aucun utilisateur trouvé</div>;
  }  

  return <Content user={user} />;
}
