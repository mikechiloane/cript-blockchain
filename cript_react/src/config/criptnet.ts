import axios from "axios";
import {api} from "./api.ts";

const criptnet = axios.create({
    baseURL: api.baseUrl,
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

})


export default criptnet;