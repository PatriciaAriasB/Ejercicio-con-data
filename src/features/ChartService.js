import axios from 'axios';

const API_URL = "http://localhost:3001/";

const getChart = async () => {
    const res = await axios.get(API_URL);
    return res.data;
}

const chartService = {
    getChart,
};

export default chartService;