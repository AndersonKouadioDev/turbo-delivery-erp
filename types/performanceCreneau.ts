interface Creneau {
    debut: string;  
    fin: string;    
}

interface Progression{
    jour:string,
    progression: number,
    heure: number,
    commission:number
}

interface PerformanceCreneau{
    creneau:Creneau,
    debut:string,
    progressions:Progression[],
}
