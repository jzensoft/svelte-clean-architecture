import type { AxiosInstance } from "axios";
import { injectable } from "inversify";
import axios from "axios";

@injectable()
class PhotoService {
    getInstance(): AxiosInstance {
        return axios.create({
            baseURL: "https://jsonplaceholder.typicode.com"
        });
    }
}

export default PhotoService