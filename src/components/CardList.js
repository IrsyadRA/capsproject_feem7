const ListCard = ({imgSrc, title}) => {
    return (
        <div>
            <a className="w-72 text-left text-lg font-semibold" href="#">
                <div className="rounded-xl w-72 h-72 bg-gray-200 py-3.5 shadow-md">
                    <img src={imgSrc} className="rounded-xl w-64 h-64 mx-auto" />
                </div>
                <p className="mt-2 truncate w-64">{title}</p>
            </a>
        </div>
    )
}
export default ListCard;