const Button = ({ btnName, style, click }) => {
    return (
        <div>
            <button className={style} onClick={click}>{btnName}</button>
        </div>
    )
}

export default Button;