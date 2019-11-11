export interface UserInterface{
    id? : string;
    name? : string;
    email? : string;
    photoUrl? :string;
    password?: string;
    level?: number;
    scores?: Array<number>;
}