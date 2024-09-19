import axios from "axios";
import { decodeToken } from "react-jwt";
import { getCookie } from "@/helper";
import { Certification } from "@/interfaces";



export const getCertification = () => {
    // console.log(usuario)
    return axios.get('http://localhost:8080/api/certifications')
}



export const getCertificationById = (id: string) => {
    // console.log(usuario)
    return axios.get(`http://localhost:8080/api/certifications/${id}`)
}



export const getCertificationsByUserId = () => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const { uid }: any = decodeToken(token);
    const userId = uid;

    const config = {
        headers: {
            'x-token': token,
            'x-userId': userId
        }
    };
    return axios.get(`http://localhost:8080/api/certifications`, config)
}


export const postCertification = (data: Certification) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;
    const { uid }: any = decodeToken(token);

    data.userId = uid;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.post(`http://localhost:8080/api/certifications`, data, config)
}


export const putCertification = (data: Certification, id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    }; return axios.put(`http://localhost:8080/api/certifications/${id}`, data, config)
}


export const deleteCertification = (id: string) => {
    const token = JSON.parse(getCookie('USER_AUTH') || '').tokenAccess;

    const config = {
        headers: {
            'x-token': token
        }
    };
    return axios.delete(`http://localhost:8080/api/certifications/${id}`, config)
}

