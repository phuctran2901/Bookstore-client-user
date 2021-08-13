import axios from 'axios';



export default function callApi(endpoint, method = 'GET', body, header) {
    return axios({
        method: method,
        url: `https://phuctran-book-store.herokuapp.com/api${endpoint}`,
        data: body,
        headers: header
    }).catch(err => {
        console.log(err);
    });
};
