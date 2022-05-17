import axios from "axios";

export const connect = axios.create({
    baseURL: "/api/"
});
