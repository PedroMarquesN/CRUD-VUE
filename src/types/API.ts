export interface ICourse {
    id: number;
    title: string;
    author: string;
    views: number;
}

export interface IApiService<T> {
    list: () => Promise<T[]>;
    post: (item: T) => Promise<T>;
    remove: (id: number) => Promise<void>;
    update: (id: number, item: T) => Promise<T>;
    getById: (id: number) => Promise<T>;
    save: (item: T) => Promise<T>;
}


export interface IPostService {
    list: () => Promise<ICourse[]>;
    post: (item: ICourse) => Promise<ICourse>;
    remove: (id: number) => Promise<void>;
    update: (id: number, item: ICourse) => Promise<ICourse>;
    getById: (id: number) => Promise<ICourse>;
    save: (item: ICourse) => Promise<ICourse>;
}