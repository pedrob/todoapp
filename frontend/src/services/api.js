import axios from 'axios';

const api = axios.create({
	baseURL: 'https://todoapp-api-pbc.herokuapp.com'
});

export default api;
