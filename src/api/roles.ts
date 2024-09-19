import axios from "axios";




export const getRoles = () => {

    return axios.get('http://localhost:8080/api/roles')
}
