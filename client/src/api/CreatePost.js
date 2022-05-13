import { MAIN_URL } from "./MainUrl";

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