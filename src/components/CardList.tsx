import {Link} from "react-router-dom";
interface Props {
    keyid: string,
    imgSrc: string,
    title: string,
  }
const ListCard = ({keyid, imgSrc, title}:Props) => {
    return (
        <div>
            <Link className="w-72 text-left text-lg font-semibold" to={"detail/"+keyid}>
                <div className="rounded-xl w-72 h-72 bg-gray-200 py-3.5 shadow-md">
                    <img src={imgSrc} className="object-cover rounded-xl w-64 h-64 mx-auto" alt="/"/>
                </div>
                <p className="mt-2 truncate w-64">{title}</p>
            </Link>
        </div>
    )
}
export default ListCard;