import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { accessLogin } from "../Store/actions";
import Button from "../components/Button";
import InputText from "../components/InputBar";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleLogin = (e) => {
    /* if (email === '' || password.length <= 10) {
      return (
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
            <div>
              <p class="font-bold">Our privacy policy has changed</p>
              <p class="text-sm">Make sure you know how these changes affect you.</p>
            </div>
          </div>
        </div>
      )
    } */
    dispatch(accessLogin(true));
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen w-full">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-left">
          <img className="mb-4 w-44" src="./icon/logo_ebility.png" alt="/"/>
          <h1 className="font-bold text-3xl mb-2.5">Sign in to your account</h1>
          <p className="text-gray-400 mb-10 w-80">Maximize your talent by taking courses that have been provided by the Ebility in full</p>
          <form>
            <label className="font-semibold" htmlFor="email">Email Address</label>
            <InputText
              design="peer mt-2.5 w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 
              invalid:border-pink-500 invalid:text-pink-600"
              value={email}
              onChange={handleEmail}
              placeholder='Email Address'
              type='email'
              testid="email-input"
            >
              <p className="invisible peer-invalid:visible text-pink-600 text-sm mb-4">
                Please provide a valid email address.
              </p>
            </InputText>
            <label className="font-semibold" htmlFor="password">Password</label>
            <InputText
              design='peer w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5 invalid:border-pink-500 invalid:text-pink-600'
              value={password}
              onChange={handlePassword}
              placeholder='Password'
              type='password'
              testid="password-input"
            >
              {password.length < 10 &&
                <p className="text-pink-600 text-sm mb-4">
                  Password must be 10 character minimum.
                </p>}
            </InputText>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <input type="checkbox" className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2" />
                <p className="text-gray-400">Keep me signed in</p>
              </div>
              <div>
                <a className="text-blue-500" href="/#">Forgot Password?</a>
              </div>
            </div>
            <Link to="/">
              <Button
                btnName="Sign In"
                design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                testid="btnlogin"
                click={handleLogin}
              />
            </Link>
            <p className="text-center text-gray-400">Not registered yet? <span><Link className="font-semibold text-blue-500" to="/register">Create a new account</Link></span></p>
          </form>
        </div>
      </div>
      <div className="hidden sm:inline-flex flex items-center justify-center bg-sky-600 h-screen">
        <img className="w-2/3 m-auto" src="./icon/icon_earth.png" alt="/" />
      </div>
    </div>
  );
};

export default LoginPage;
