import { MAIN_URL } from "./main_url";

async function createPost(title, username) {
    
    const URL = MAIN_URL + 'post/';

    const data = {
        title, 
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

export default createPost;