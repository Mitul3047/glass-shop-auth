import { useContext } from "react";
import { AuthContext } from "../../Proovider/AuthProvider";
import { FaGoogle} from 'react-icons/fa';


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    //  console.log(user);


    const handleSocialLogin = (media) => {
        media()
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }


    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm"> <span><FaGoogle></FaGoogle></span>Google</button>
            </div>
        </>
    );
};

export default SocialLogin;