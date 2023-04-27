import http from "./http-common";
import {PostData} from "./types";
import config from "./infrastructure/config";
import axios from "axios";
import moment from "moment";

const apiVersion = "/api/v2/lead"

const formService = (data:PostData) => {
    return http.post<PostData>(apiVersion, data);
}

const getRegister = (form:string) => {
    const configuration = {
        method: 'get',
        url: `${config.API_URL}${apiVersion}?form=${form}`,
        headers: {
            'Authorization': 'Bearer ' + config.ACCESS_TOKEN as string,
            xsrfCookie: `tenant=${config.TENANT}`,
        },
        withCredentials: true
    }
    return axios.request(configuration)
}

const getCities = () => {
    return axios.get(config.API_CITIES);
}

const Services = {
    formService,
    getRegister,
    getCities
}

export default Services;
