export interface CLIENT{
    _id:string;
    client_id:number
    name: string; 
    prenom: string; 
    email: string; 
    genre: string; 
    addresse: string; 
    mdp: string;
    numtel: Number;
    user:USER  []
   
    excursions:EXCURSION[];
}

export interface ORGANISATEUR{
            name: string,
            prenom: string,
            email: string,
            numtel: number,
            addresse: string,
            genre: string,
            pdp: string,
            mdp: string,
            type: String,
            pdi:string,
            user:USER [] ,
            
            
}
export interface USER{
    _id:string;
    name: string;  
    username: string; 
    mdp: string;
    email:string;
    role:string;
    client:CLIENT[]
   
}
export interface EXCURSION{
    _id:string;
    nom_exc: string; 
    destination: string,
    depart_exc: string;
    prix: Number,
    date_depart: Date,
    date_fin: Date,
    photos: string,
    client:CLIENT[],
    idorg: string

}

export interface NONEXCURSION{
    _id:string;
    nom_exc: string; 
    destination: string,
    depart: string;
    prix: Number,
    date_depart: Date,
    date_modif:Date,
    date_fin: Date,
    photos: string,
    idorg: string
    Client:CLIENT[],
}
export interface PANIER {
    excursions:EXCURSION[],
    idclient: string ,
    
}
export interface RESERVATION {
    _id:string,
    marque:string,
    idagence:string,
    nb_place_bus:Number,
    idorganisteur : string ,
}
export interface BUS {
    _id:string,
    marque:string,
    idlouer:EXCURSION[],
    email : string ,
    idagence:string,
    nb_place_bus:Number,
}
export interface FAVORIS {
    idclient: String ;
    idexcursion :String ;
}
