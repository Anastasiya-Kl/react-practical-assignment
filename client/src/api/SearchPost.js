import { MAIN_URL } from "./MainUrl";

async function searchPost(keyWord) {

    const URL = MAIN_URL + `post/search/${keyWord}`;

    const response = await fetch(URL);

    return response.json();
}

export default searchPost;