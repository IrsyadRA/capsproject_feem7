import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import ListCard from "../components/CardList"
import data from "../Store/dataCourse"
const MyCoursePage = () => {
    const myCourse = useSelector((state) => state.buyCourse)
    return (
        <div>
            <div className="grid grid-cols-4 gap-x-1 gap-y-6 justify-items-center">
                {myCourse.map((item) => {
                    return (
                        <ListCard
                            key={item.id}
                            keyid={item.id}
                            imgSrc={item.img}
                            title={item.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MyCoursePage;