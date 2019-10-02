import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-72b6f.firebaseio.com/'
});

export default instance;