import { MAIN_URL } from "./MainUrl";

async function uploadPicture(id, picture) {

    const URL = MAIN_URL + `post/${id}/picture`;

    const formData = new FormData();
    formData.append("picture", picture);

    const response = await fetch(URL, {
        method: 'POST',
        body: formData,
    });

    return response.json();
}

export default uploadPicture;