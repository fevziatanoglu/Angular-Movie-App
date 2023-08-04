export interface MovieDetails {
    id: number;
    title: string;
    backdrop_path : string | undefined;
    poster_path : string | undefined;
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