
import axios from 'axios';

const url = 'https://api.ipify.org?format=json';

const getIpAddress = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        return error;
    }
}

export default getIpAddress;