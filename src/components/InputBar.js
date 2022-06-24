const InputText = ({ style, value, onChange, placeholder, type, testid, children }) => {
    return (
        <div>
            <input className={style} type={type} value={value} onChange={onChange} placeholder={placeholder} data-testid={testid}/>
            {children}
        </div>
    )
}

export default InputText;