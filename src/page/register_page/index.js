import signupImage from "../../global_component/images/Saly-43.png";

const RegisterPage = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 max-h-screen w-full">

            <div className="hidden sm:inline-flex flex items-center justify-center bg-sky-600 h-screen">         
                    <img className="w-2/3 m-auto" src={signupImage}/>
            </div>
        </div>
    )
}

export default RegisterPage;