import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
interface IInputProps {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    handleChange: ()=>{};
    handleShowPassword: ()=>{};
    value: string;
}

const Input = (props: IInputProps) => {
    const { name, type, label, placeholder, handleChange, handleShowPassword, value } = props;
    return (
        <div className="py-2 space-y-4">
            <label className="flex items-start">{label}</label>
            <div className="relative flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    className="block flex-1 border-1 rounded-md  border-blue-600 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 cursor-pointer"
                    onChange={handleChange}
                />
                {(name === 'password' || name === 'confirmPassword') && (
                    <span onClick={handleShowPassword} className="absolute pt-1 right-4 top-[10%] cursor-pointer">
                        {<FontAwesomeIcon icon={type === 'password' ? faEyeSlash : faEye} />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
