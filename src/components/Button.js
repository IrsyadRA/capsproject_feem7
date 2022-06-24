const Button = ({ btnName, style, click, testid }) => {
    return (
        <div>
            <button className={style} onClick={click} data-testid={testid}>{btnName}</button>
        </div>
    )
}

export default Button;