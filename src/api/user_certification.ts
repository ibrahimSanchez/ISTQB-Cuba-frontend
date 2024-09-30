import axios from "axios";
import { getCookie } from "@/helper";



export const getUser_certification = () => {
    // const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    // const config = {
    //     headers: {
    //         'x-token': token
    //     }
    // };
    return axios.get('http://localhost:8080/api/user_certifications'
        // , config
    )
}


export const putUser_certification = (id: string, data: {}) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.put(`http://localhost:8080/api/user_certifications/${id}`, data, config)
}
 


export const deleteUser_certification = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/user_certifications/${id}`, config)
}



export const deleteArrayUser_certification = (data: string[]) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token,
        },
        data: {
            data
        }
    };
    return axios.delete(`http://localhost:8080/api/user_certifications`, config)
}

