import dataCourse from "../data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../components/Button"

const DetailCoursePage = () => {
    const [dataObj, setDataObject] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const dataObj = dataCourse.find((d) => d.id === id);
        setDataObject(dataObj)
    })

    return (
        <div className="max-w-[1280px] mx-auto py-32">
            {/* Gambar Illustrasi */}
            <img className="w-full max-h-[32rem] rounded-lg" src={dataObj.img} alt="/"/>

            {/* Judul */}
            <div className="grid grid-flow-col grid-cols-12 gap-12 pt-2 items-center">
                <div className="flex flex-col items-start text-left col-span-9">
                    <h1 className="text-5xl text-black font-bold">{dataObj.title}</h1>
                </div>
                <div className="col-span-8 col-start-11">
                    <Button
                        btnName={dataObj.price}
                        style="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                    />
                </div>
            </div>

            {/* Deskripsi */}
            <p className="text-justify pt-6">{dataObj.desc}</p>

            {/* Projek */}
            <div className="items-start text-left pt-6">
                <h1 className="text-2xl text-blue-500 font-bold">Projects you will work on</h1>
                <p className="text-justify pt-3">{dataObj.project}</p>
            </div>

            {/* Level */}
            <div className="items-start text-left pt-6">
                <h1 className="text-2xl text-blue-500 font-bold">Who is this class for?</h1>
                <p className="text-justify pt-3">{dataObj.level}</p>
            </div>
            
            {/* Periode */}
            <div className="items-start text-left pt-6">
                <h1 className="text-2xl text-blue-500 font-bold">Study period</h1>
                <p className="text-justify pt-3">{dataObj.period}</p>
            </div>
        </div>
    )
}

export default DetailCoursePage