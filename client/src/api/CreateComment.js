import { MAIN_URL } from "./main_url";

async function createComment(text, postId, username) {
    const URL = MAIN_URL + `comment/`;

    const data = {
        text,
        postId,
        username
    }

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response.json().id;
}

export default createComment;