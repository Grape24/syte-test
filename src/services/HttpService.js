import history from '../history';
import Axios from 'axios';
import {config} from '../ignore/ignore';

const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v2/'

var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, params, data) {
        return ajax(`${endpoint}`, 'GET', data , params)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}


async function ajax(endpoint, method = 'get', data = null, params = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params,
            headers: config
        })
        return res.data;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            history.push('/');
        }
        throw err;
    }
}