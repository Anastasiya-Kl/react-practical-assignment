import { MAIN_URL } from "./main_url";

async function updatePost(id, title, likes, dislikes) {
    
    const URL = MAIN_URL + `post/${id}`;

    const data = {
        title, 
        likes, 
        dislikes
    }

    let response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
}

export default updatePost;