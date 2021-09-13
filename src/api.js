import axios from "axios";

export const getAllSneakers = async () => {
    return axios.get('https://6107faecd73c6400170d3757.mockapi.io/data').then(res => res.data);
}