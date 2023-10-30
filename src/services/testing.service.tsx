import axios from "axios"

const url = 'https://rickandmordtyapi.com/api/character/2'
export const TestingService = () => {
    return axios.get(url);
}