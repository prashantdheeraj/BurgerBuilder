import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pd-react-my-burger.firebaseio.com/'
})

export default instance ;