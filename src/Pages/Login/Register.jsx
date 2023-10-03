import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseAuth from '../../hooks/UseAuth';
import toast from 'react-hot-toast';

const Register = () => {
    const { signUp } = UseAuth()

    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const imageUrl = e.target.imageUrl.value;
        const password = e.target.password.value;
        


        // validation
        if (password.length < 6) {
           return toast.error('Password must be 6 character')
        }
        // console.log(name, password, email, imageUrl);

        // create User
        signUp(email,password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSignUp}
                            className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Full name"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input
                                    type="text"
                                    name='imageUrl'
                                    placeholder="image url"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6 p-0">
                                <button
                                    type='submit'
                                    className="btn btn-neutral">Register</button>
                            </div>

                            <label className="label">
                                Have an account?
                                <Link to="/login"
                                    className="label-text-alt link link-hover"
                                >Please Login</Link>
                            </label>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;