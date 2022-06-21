import Button from "../components/Button";

const JobVacancyPage = () => {

    return (
        <div className="max-w-screen ">
            <div className="max-w-[1280px] mx-auto py-20">
                <div className="grid grid-flow-col grid-cols-12 gap-12 py-20">
                    <div className="flex flex-col items-start text-left py-20 my-8 col-span-8">
                        <h1 className="text-6xl text-black font-bold leading-tight">Looking for a Job just got <span className="text-blue-600">Easier!</span></h1>
                        <p className="text-xl text-gray-400 mt-4 font-medium-1">With adequate expertise, it will make it easier for you to find work</p>
                        <Button 
                        btnName="Sign Up" 
                        style="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                        />
                    </div>
                    <div className="hidden sm:block col-span-8 col-start-9">
                        <img className="w-full" src="./icon/icon_job_vacancy.png" alt="/" />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default JobVacancyPage;