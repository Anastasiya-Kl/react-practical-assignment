import { MAIN_URL } from "./main_url";

async function deleteComment(id) {

    const URL = MAIN_URL + `comment/${id}`;

    const response = await fetch(URL, {
        method: 'DELETE',
    });

    return response.json();
}

export default deleteComment;