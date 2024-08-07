// import { User } from "@/interfaces";
import axios from "axios";

// type UserLogin = {
//     email: string,
//     password: string,
// };


export const getCurses = () => {
    // console.log(usuario)
    return axios.get('http://localhost:8080/api/curses')
}



export const getCurseById = (id: string) => {
    // console.log(usuario)
    return axios.get(`http://localhost:8080/api/curses/${id}`)
}
