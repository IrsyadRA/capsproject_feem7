import InputText from "../../global_component/input_text"
import Button from "../../global_component/button"
import ListCard from "./component/cardComponent"
import data from "../../data"
import { useState } from "react"
const ListCoursePage = () => {
    const [keyword, setKeyword] = useState('');

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <div className="flex flex-row h-20 items-end mb-10">
                <div className="w-1/2 text-left h-full pt-3">
                    <h6 className="text-blue-500 font-semibold">Class available</h6>
                    <h1 className="font-bold text-4xl">Digital skills class</h1>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-end gap-x-3 h-full">
                        <InputText
                            style='w-96 h-12 border-2 border-gray-400 rounded-lg p-2.5'
                            value={keyword}
                            onChange={handleKeyword}
                            placeholder="Search Course"
                            type='text'
                        />
                        <Button
                            btnName='Search'
                            style='w-32 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                {data.map((item) => {
                    return (
                        <ListCard
                            key={item.id}
                            imgSrc={item.img}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default ListCoursePage;