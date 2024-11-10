// types/index.ts
export interface Post {
    userId: string;
    id: string;
    title: string;
    body: string;
    date: string;
    
}

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface RootState {
    posts: Post[];
    users: User[];
}

export type Status = "idle" | "pending" | "fulfilled" | "rejected"