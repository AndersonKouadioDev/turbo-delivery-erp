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
    "id": "12uh",
    "nom": "YAO",
    "prenom": "JUDICAËL",
    "dateNaissance": "13/03/1996",
    "telephone": "2254040101",
    "domicile": "Cocody Angré",
    "email": "judicael.yao@example.com",
    "typeDocument": "Carte d'identité (CNI)",
    "numeroDocument": "CI000000001",
    "type": "Serveur",
    "nomVehicule": "Peugeot 208",
    "immatriculationVehicule": "CI100200300"
  },
  {
    "id": "2kkjn",
    "nom": "BAMBA",
    "prenom": "AMAR",
    "dateNaissance": "15/06/1992",
    "telephone": "2255050202",
    "domicile": "Yopougon Sideci",
    "email": "amar.bamba@example.com",
    "typeDocument": "Passeport",
    "numeroDocument": "CI000000002",
    "type": "Livreur",
    "nomVehicule": "Yamaha XMAX",
    "immatriculationVehicule": "CI200300400"
  },
  {
    "id": "3lknbc",
    "nom": "KONE",
    "prenom": "NADIA",
    "dateNaissance": "21/09/1993",
    "telephone": "2256060303",
    "domicile": "Adjamé Williamsville",
    "email": "nadia.kone@example.com",
    "typeDocument": "Permis de conduire",
    "numeroDocument": "CI000000003",
    "type": "Caissière",
    "nomVehicule": "",
    "immatriculationVehicule": ""
  },
  {
    "id": "4nds2",
    "nom": "DIARRA",
    "prenom": "MOUSTAPHA",
    "dateNaissance": "11/02/1988",
    "telephone": "2257070404",
    "domicile": "Marcory Zone 4",
    "email": "moustapha.diarra@example.com",
    "typeDocument": "Carte d'identité (CNI)",
    "numeroDocument": "CI000000004",
    "type": "Chauffeur",
    "nomVehicule": "Toyota Hilux",
    "immatriculationVehicule": "CI300400500"
  },
  {
    "id": "5kjvx5",
    "nom": "SOUARE",
    "prenom": "AMINATA",
    "dateNaissance": "30/05/1990",
    "telephone": "2258080505",
    "domicile": "Plateau Vallon",
    "email": "aminata.souare@example.com",
    "typeDocument": "Carte d'identité (CNI)",
    "numeroDocument": "CI000000005",
    "type": "Hôtesse",
    "nomVehicule": "",
    "immatriculationVehicule": ""
  },
  {
    "id": "6pjfddr8",
    "nom": "TRAORE",
    "prenom": "OUMAR",
    "dateNaissance": "09/08/1991",
    "telephone": "2259090606",
    "domicile": "Treichville Arras",
    "email": "oumar.traore@example.com",
    "typeDocument": "Passeport",
    "numeroDocument": "CI000000006",
    "type": "Cuisinier",
    "nomVehicule": "Renault Kangoo",
    "immatriculationVehicule": "CI400500600"
  },
  {
    "id": "1ll;p",
    "nom": "FALL",
    "prenom": "AÏCHA",
    "dateNaissance": "18/04/1989",
    "telephone": "2251010101",
    "domicile": "Koumassi Remblais",
    "email": "aicha.fall@example.com",
    "typeDocument": "Permis de conduire",
    "numeroDocument": "CI000000007",
    "type": "Livreur",
    "nomVehicule": "Kia Picanto",
    "immatriculationVehicule": "CI500600700"
  },
  {
    "id": "l44unj",
    "nom": "TOURE",
    "prenom": "AMADOU",
    "dateNaissance": "27/11/1995",
    "telephone": "2252020202",
    "domicile": "Port-Bouët Gonzagueville",
    "email": "amadou.toure@example.com",
    "typeDocument": "Passeport",
    "numeroDocument": "CI000000008",
    "type": "Serveur",
    "nomVehicule": "",
    "immatriculationVehicule": ""
  },
  {
    "id": "3ljnb087",
    "nom": "COULIBALY",
    "prenom": "MARIAM",
    "dateNaissance": "14/07/1997",
    "telephone": "2253030303",
    "domicile": "Bingerville Résidentiel",
    "email": "mariam.coulibaly@example.com",
    "typeDocument": "Carte d'identité (CNI)",
    "numeroDocument": "CI000000009",
    "type": "Cuisinière",
    "nomVehicule": "",
    "immatriculationVehicule": ""
  },
  {
    "id": "4mbhgf",
    "nom": "SISSOKO",
    "prenom": "ALI",
    "dateNaissance": "05/03/1986",
    "telephone": "2254040404",
    "domicile": "Treichville Biafra",
    "email": "ali.sissoko@example.com",
    "typeDocument": "Permis de conduire",
    "numeroDocument": "CI000000010",
    "type": "Livreur",
    "nomVehicule": "Peugeot Partner",
    "immatriculationVehicule": "CI600700800"
  }
]


export default async function UserPage({ params }: TurboysPageProps) {
  const { id } = await params; // Récupère l'ID depuis l'URL
  const user = userData.find(item => item.id === id);

  if (!user) {
    return <div>Aucun utilisateur trouvé</div>;
  }  

  return <Content user={user} />;
}
