import { MAIN_URL } from "./MainUrl";

async function getPosts(page) {

    const URL = MAIN_URL + `post/page/${page}`;

    let response = await fetch(URL);
    return response.json();
}

export default getPosts;