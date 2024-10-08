import useApi from '../composables/UseApi';
import { IPostService } from '../types/API';

export default function coursesService (): IPostService {
    const{ list, post,remove,update, getById, save} = useApi('courses');

    return {
        list,
        post,
        remove,
        update,
        getById,
        save
    }
}