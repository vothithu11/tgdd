import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
interface IInputProps {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    handleShowPassword?: () => void;
    value?: string;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=> void;
   
}

const Input = (props: IInputProps) => {
    const { name, type, label, placeholder, handleChange, handleShowPassword, value } = props;
    return (
        <div className="flex flex-col gap-4 w-full">
            <label className="">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    className="cursor-pointer w-full p-2.5 rounded-lg border border-[#288AD6] outline-none"
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
