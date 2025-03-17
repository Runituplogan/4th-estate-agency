interface InputProps {
    label: string;
    placeholder: string;
  }
  
const InputForm:React.FC<InputProps> =({label,placeholder})=>{
    return (
    <div>
        <h3 className="text-sm text-[#66717B] mb-2">{label}</h3>
        <input placeholder={placeholder} className="py-2  px-2 rounded-md w-full"/>
    </div>
    )
}

export default InputForm;