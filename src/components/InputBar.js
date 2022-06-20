const InputText = ({style, value, onChange, placeHolder, type})=>{
    return(
        <div>
            <input className={style} type={type} value={value} onChange={onChange} placeHolder={placeHolder}></input>
        </div>
    )
}

export default InputText;