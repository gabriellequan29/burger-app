import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-78f8d.firebaseio.com/'
});

export default instance;