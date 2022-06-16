const InputText = ({style, value, onChange, placeholder, type})=>{
    return(
        <div>
            <input className={style} type={type} value={value} onChange={onChange} placeholder={placeholder}></input>
        </div>
    )
}

export default InputText;