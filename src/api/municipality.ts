import axios from "axios";


export const getMunicipalities = () => {

    return axios.get('http://localhost:8080/api/municipalities')
}
