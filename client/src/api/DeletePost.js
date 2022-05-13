import { MAIN_URL } from "./MainUrl";

async function deletePost(id) {

    const URL = MAIN_URL + `post/${id}`;

    let response = await fetch(URL, {
        method: 'DELETE',
    });

    return response.json();
}

export default deletePost;