import axios from "axios";
import { getToken } from "../features/security/utils/HandleJWT";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

apiClient.interceptors.request.use(config => {
    const token = getToken();

    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default apiClient;