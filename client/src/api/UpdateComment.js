import { MAIN_URL } from "./MainUrl";

async function updateComment(id, text, likes, dislikes) {

    const URL = MAIN_URL + `comment/${id}`;

    const data = {
        text,
        likes,
        dislikes
    }

    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response.json();
}

export default updateComment;