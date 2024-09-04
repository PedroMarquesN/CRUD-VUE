import { api } from '../boot/axios';
import { IApiService, ICourse } from '../types/API';



export default function useApi(url: string): IApiService<ICourse> {
    
    const list = async (): Promise<ICourse[]> => {
        try {
            const { data } = await api.get<ICourse[]>(url);
            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Um erro desconhecido ocorreu');
            }
        }
    };

    const getById = async (id: number): Promise<ICourse> => {
        try {
          const { data } = await api.get<ICourse>(`${url}/${id}`);
          return data;
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('Um erro desconhecido ocorreu');
          }
        }
      };

    const post = async (item: ICourse): Promise<ICourse> => {
        try {
            const { data } = await api.post<ICourse>(url, item);
            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Um erro desconhecido ocorreu');
            }
        }
    };

    const remove = async (id: number): Promise<void> => {
        try {
            await api.delete(`${url}/${id}`);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Um erro desconhecido ocorreu');
            }
        }
    };

    const update = async (id: number, item: ICourse): Promise<ICourse> => {
        try {
            const { data } = await api.put<ICourse>(`${url}/${id}`, item);
            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Um erro desconhecido ocorreu');
            }
        }
    };

    return { list, post, remove, update, getById };
}