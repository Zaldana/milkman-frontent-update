import axios from 'axios';

let url =
    (process.env.REACT_APP_AXIOS === "development")
        ? "http://localhost:4001/api/"
        : "/api/";

const AxiosBackend = axios.create({
    baseURL: url,
    withCredentials: true,
});

export default AxiosBackend