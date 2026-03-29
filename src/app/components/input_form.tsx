// interface InputProps {
//     label?: string;
//     name?: string; // Add name as a prop
//     placeholder?: string;
//     value?: string;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const InputForm: React.FC<InputProps> = ({ label, name, placeholder, value, onChange }) => {
//     return (
//         <div>
//             <h3 className="text-sm text-[#66717B] mb-2">{label}</h3>
//             <input
//                 type="text"
//                 name={name}  // Use the correct name prop
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//                 className="py-2 px-2 rounded-md w-full"
//                 required={true}
//             />
//         </div>
//     );
// };

// export default InputForm;

interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <h3 className="text-sm text-[#5f666c] mb-2">{label}</h3>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-2 px-3 rounded-md w-full border border-gray-600 placeholder:text-gray-600 focus:outline-none focus:border-[#385065] transition-colors"
        required={true}
      />
    </div>
  );
};

export default InputForm;