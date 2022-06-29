import Button from "../components/Button";
import InputText from "../components/InputBar"
import { useState } from "react"
import ListJob from "../components/ListJob"

const JobVacancyPage = () => {
    const [keyword, setKeyword] = useState('');

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
        }

    return (
        <div className="max-w-screen ">
            <div className="max-w-[1280px] mx-auto py-20">
                
                <div className="flex flex-row h-20 items-end mb-10">
                        <div className="w-1/2 text-left h-full pt-3">
                            <h6 className="text-blue-500 font-semibold">Job available</h6>
                            <h1 className="font-bold text-4xl">The Best Job Choice </h1>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-end gap-x-3 h-full">
                                <InputText
                                    style='w-96 h-12 border-2 border-gray-400 rounded-lg p-2.5'
                                    value={keyword}
                                    onChange={handleKeyword}
                                    placeholder="Search Job"
                                    type='text'
                                />
                                <Button
                                    btnName='Search'
                                    style='w-32 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                                />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <ListJob
                        imgSrc="./icon/icon_gojek.png"
                        title="Intern Digital Marketing"
                        fee="3 million/month"
                        location="jakarta"
                        type="Parttime"
                        requirement="0-1 year experience (Fresh Graduate)"
                    />
                    <ListJob
                        imgSrc="./icon/icon_gojek.png"
                        title="Intern Digital Marketing"
                        fee="3 million/month"
                        location="jakarta"
                        type="Parttime"
                        requirement="0-1 year experience (Fresh Graduate)"
                    />
                    <ListJob
                        imgSrc="./icon/icon_gojek.png"
                        title="Intern Digital Marketing"
                        fee="3 million/month"
                        location="jakarta"
                        type="Parttime"
                        requirement="0-1 year experience (Fresh Graduate)"
                    />
                    <ListJob
                        imgSrc="./icon/icon_gojek.png"
                        title="Intern Digital Marketing"
                        fee="3 million/month"
                        location="jakarta"
                        type="Parttime"
                        requirement="0-1 year experience (Fresh Graduate)"
                    />
                    
                        
                </div>
            </div> 
        </div>
    )
}


export default JobVacancyPage;