import Button from "../../components/Button";

const ListCoursePage = () => {

    return (
        <div className="max-w-screen bg-sky-50">
            <div className="max-w-[1280px] mx-auto py-36 bg-sky-50">
                <div className="grid grid-flow-col grid-cols-12 gap-12 py-36">
                    <div className="flex flex-col items-start text-left py-20 my-8 col-span-8">
                        <h1 className="text-6xl text-black font-bold"><span className="text-blue-600">Certified</span> Course Class</h1>
                        <p className="text-xl text-gray-400 mt-4 font-medium-1">Intensive and structured classes for 2 months, guided by experienced mentors</p>
                        <Button 
                        btnName="Take Class" 
                        style="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                        />
                    </div>
                    <div className="hidden sm:block col-span-8 col-start-9">
                        <img className="w-full" src="./icon/icon_course_intro.png" alt="/" />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default ListCoursePage;