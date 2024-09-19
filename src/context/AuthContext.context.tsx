import { createContext } from "react";


export const AuthContext = createContext({
    dispatch: function (value: {}) {
    },
    userAuth: {
        tokenAccess: '',
        logged: false,
        role: ''
    }
}); 