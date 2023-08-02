export interface Credits{
    id : number,
    cast : Cast[],
    crew : Crew[]
}

export interface Cast{
    id: number;
    name: string;
    order: number;
    original_name: string;
    character: string;
    profile_path: string;
}

export interface Crew{

}