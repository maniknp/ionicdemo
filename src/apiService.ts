import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        // console.log(response);
        return response;
    } catch (error) {
        console.error("Error",error);
    }
};

export { fetchData }; 