import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseAuth from '../../hooks/UseAuth';




const Login = () => {

    const { signIn } = UseAuth()

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password);

        // getuser

        signIn(email,password)
        .then(res=> console.log(res.user))
        .catch(error=>console.error(error))   

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name='email' 
                                type="text" 
                                placeholder="email" 
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                name='password'
                                type="text" 
                                placeholder="password" 
                                className="input input-bordered" />
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button
                                type='submit' 
                                className="btn btn-neutral"
                                >Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;