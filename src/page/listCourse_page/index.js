import Key from "../../global_component/images/Key.png";
import Message from "../../global_component/images/Message.png";
import Task from "../../global_component/images/Task.png";
import Quiz from "../../global_component/images/Quiz.png";
import Chart from "../../global_component/images/Chart.png";
import Trophy from "../../global_component/images/Trophy.png";

const ListCoursePage = () => {

    return (
        <div className="max-w-[1280px] mx-auto my-40">
            <div className="text-center">
                <p className="text-xl text-sky-500 font-bold">Course Scheme</p>
                <h1 className="text-6xl text-black font-bold">How to Study at Ebility</h1>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 px-2 text-center mt-20">
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Key} alt="desc-text"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium-1">Access all materials on the web</p>
                </div>
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Message} alt="desc-text-2"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium">Join the discussion group</p>
                </div>
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Task} alt="desc-text-3"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium">Do all the tasks</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 px-2 text-center mt-5">
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Quiz} alt="desc-text-4"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium">Do the quiz every weekend</p>
                </div>
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Chart} alt="desc-text-5"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium">View and improve your achievements</p>
                </div>
                <div className="border py-8 rounded-xl shadow-lg">
                    <img className="m-auto" src={Trophy} alt="desc-text-6"/>
                    <p className="text-xl text-gray-400 mt-4 font-medium">Get your skills and certificates</p>
                </div>
            </div>
            
        </div>
    )
}

export default ListCoursePage;