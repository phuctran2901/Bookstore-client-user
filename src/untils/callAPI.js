import axios from 'axios'

export default function callApi(endpoint, method = 'GET', body, header) {
  return axios({
    method: method,
    url: `https://book-store-api-ashy.vercel.app/api${endpoint}`,
    // url: `http://localhost:5000/api${endpoint}`,
    data: body,
    headers: header
  }).catch((err) => {
    console.log(err)
  })
}
