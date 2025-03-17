interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
const InputForm: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <div>
            <h3 className="text-sm text-[#66717B] mb-2">{label}</h3>
            <input 
                type="text"
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className="py-2 px-2 rounded-md w-full"
            />
        </div>
    );
};

export default InputForm;
