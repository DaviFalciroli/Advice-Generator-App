import { instance } from "./axios"

export class AdviceService {
    static getAdvice = async () => {
        try {
            const response = await instance({
                method: "GET",
                url: "/advice"
            })
            return response.data;

        } catch (error) {
            throw error;
        }
    }
}