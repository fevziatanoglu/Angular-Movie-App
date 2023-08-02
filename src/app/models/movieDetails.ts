export interface MovieDetails {
    id: number;
    title: string;
    backdrop_path : any;
    poster_path : string;
    overview : string;
    genres : Genres[];
    release_date : string;
    vote_average : number;
    runtime : number;
}

export interface Genres {
    id : number;
    name : string;
}