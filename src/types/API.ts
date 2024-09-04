export interface ICourse {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface IApiService<T> {
    list: () => Promise<T[]>;
    post: (item: T) => Promise<T>;
    remove: (id: number) => Promise<void>;
    update: (id: number, item: T) => Promise<T>;
}


export interface IPostService {
    list: () => Promise<ICourse[]>;
    post: (item: ICourse) => Promise<ICourse>;
    remove: (id: number) => Promise<void>;
    update: (id: number, item: ICourse) => Promise<ICourse>;
}