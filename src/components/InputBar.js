const InputText = ({ design, value, onChange, placeholder, type, testid, children }) => {
    return (
        <div>
            <input className={design} type={type} value={value} onChange={onChange} placeholder={placeholder} data-testid={testid}/>
            {children}
        </div>
    )
}

export default InputText;