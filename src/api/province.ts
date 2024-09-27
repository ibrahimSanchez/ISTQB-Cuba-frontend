import axios from "axios";


export const getProvinces = () => {

    return axios.get('http://localhost:8080/api/provinces')
}
