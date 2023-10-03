import { useContext } from "react";
import { AuthContext } from "../Proovider/AuthProvider";



const UseAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default UseAuth;