import { getCookie } from "@/helper";
import { User } from "@/interfaces";
import axios from "axios";
import { decodeToken } from "react-jwt";



export const getUsers = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/users`, config)
}



export const getUserById = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const id = decodeToken(token).uid;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/users/${id}`, config)
}



export const deleteUser = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/users/${id}`, config)
}


export const deleteArrayUser = (data: string[]) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token,
        },
        data: {
            data
        }
    };
    return axios.delete(`http://localhost:8080/api/users`, config)
}



export const loadUserById = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.get(`http://localhost:8080/api/users/${id}`, config)
}




export const putUser = (user: User, id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    }; return axios.put(`http://localhost:8080/api/users/${id}`, user, config)
}