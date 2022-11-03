import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { AuthenticationContext } from "../../AuthContext/AuthContext";

const Login = () => {
    const {login} = useContext(AuthenticationContext)
    const handleLogin = (event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        login(email,password)
        .then(result=>{

        })
        .catch(e=>console.error(e))
    }
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
        
         <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              required
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              required
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="x" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p className='text-center my-8'>New to Genius Car <Link className="text-orange-600" to={'/signup'}>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
