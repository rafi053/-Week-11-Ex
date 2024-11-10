export interface Student {
    id:string;
    image:string;
    ismale:boolean;
    isUsingGpt:boolean;
    email:string;
    name:string
}

export type Status = "idle" | "pending" | "fulfilled" | "rejected"