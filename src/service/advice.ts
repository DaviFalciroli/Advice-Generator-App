import { Instance } from "./axios"

export class AdviceService {
    static getAdvice = async () => {
        try {
            const response = await Instance({
                method: "GET",
            })
            console.log(response.data);

            return response.data;

        } catch (error) {
            throw error;
        }
    }
}