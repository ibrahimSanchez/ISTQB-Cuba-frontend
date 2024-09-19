import axios from "axios";




export const getCategories = () => {

    return axios.get('http://localhost:8080/api/categories')
}
