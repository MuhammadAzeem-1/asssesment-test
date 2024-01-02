import axios from "axios";

const url = "http://localhost:5000";

export const fetchProducts = () => axios.get(`${url}/products`);

export const postData = (formData) => axios.post(`${url}/users`, formData);

export const getdata = () => axios.get(`${url}/users`);
