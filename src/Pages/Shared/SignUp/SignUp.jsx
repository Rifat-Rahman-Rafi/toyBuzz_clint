
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
const SignUp = () => {

    const [error, setError] = useState('');


    const [show, setShow] = useState(false);


    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photo.value;
        const password = from.password.value;
        console.log(name, email, password, photoUrl);


        setError('');
        if (password.length < 6) {
            setError('Password is less than 6 characters');
            return;
        }
        else if (password.length > 8) {
            setError('Password is longer than 8 characters');
            return;
        }
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserData(newUser, name, photoUrl);
             

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }
    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:w-6/12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register Now</h1>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <small className='text-[#36D399]' onClick={() => setShow(!show)}>
                                        <>
                                            {
                                                show ? <span>Hide</span> : <span>Show</span>
                                            }
                                        </>
                                    </small>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already have a account ? <Link className="text-primary" to="/login">logIn</Link></p>
                        <p className="text-red-600 py-3">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;