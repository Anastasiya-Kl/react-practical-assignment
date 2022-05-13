import { MAIN_URL } from "./MainUrl";

async function updatePost(id, title, likes, dislikes) {
    
    const URL = MAIN_URL + `post/${id}`;

    const data = {
        title, 
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

export default updatePost;