import axios from "axios";

export const Instance = axios.create({
    baseURL: 'https://api.adviceslip.com/advice'
})