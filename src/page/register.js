import { useState } from "react"
import InputText from "../components/InputBar";
import Button from "../components/Button";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="container w-2/4 h-screen flex flex-col items-center justify-center">
            <div className="text-left">
                <h1 className="font-bold text-3xl mb-2.5">Sign up for an account</h1>
                <p className="text-gray-400 mb-10">Ready to be part of the digital controller?</p>
                <form>
                    <label className="font-semibold">Email Address</label>
                    <InputText
                        style="mt-2.5 mb-6 w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5"
                        value={email}
                        onChange={handleEmail}
                        placeHolder='Email Address'
                        type='text'
                    />
                    <label className="font-semibold">Password</label>
                    <InputText
                        style='mt-2.5 mb-6 w-96 h-14 border-2 border-gray-400 rounded-lg p-2.5'
                        value={password}
                        onChange={handlePassword}
                        placeHolder='Password'
                        type='password'
                    />
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2" />
                        <p className="text-gray-400">I accept the <span><a href="#" className="font-semibold text-blue-500">Terms of use</a></span> and <span><a href="#" className="font-semibold text-blue-500">Subscription</a></span></p>
                    </div>
                    <Button
                        btnName="Sign Up"
                        style="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                    />
                    <p className="text-center text-gray-400">Already have an account? <span><a href="#" className="font-semibold text-blue-500">Sign In</a></span></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;