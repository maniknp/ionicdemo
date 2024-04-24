import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users?page=2`);
        return { hasError: false, ...response};
    } catch (error) {
        return {data:[], hasError: true, message: error.message, status: error.status,code: error.code ,error:error};
    }
};

export { fetchData }; 