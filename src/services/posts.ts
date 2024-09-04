import useApi from "@/composables/UseApi";
import { IPostService } from "@/types/API";

export default function postService (): IPostService {
    const{ list, post,remove,update} = useApi('posts');

    return {
        list,
        post,
        remove,
        update
    }
}