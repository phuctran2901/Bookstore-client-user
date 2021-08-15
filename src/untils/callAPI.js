import axios from 'axios';

//https://phuctran-book-store.herokuapp.com/api

export default function callApi(endpoint, method = 'GET', body, header) {
    return axios({
        method: method,
        url: `http://localhost:5000/api${endpoint}`,
        data: body,
        headers: header
    }).catch(err => {
        console.log(err);
    });
};
