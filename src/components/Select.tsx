import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface SelectProps
    extends React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    className?: string;
    style?: any;
    label?: string;
    register: RegisterType;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    options: SelectOptionsType;
}

const Select: React.FC<SelectProps> = ({
    children,
    className = "",
    style = {},
    label,
    register,
    error,
    options,
    ...props
}) => {
    return (
        <div className={`${className}`} style={style}>
            {label && (
                <label htmlFor={register.name} className="block mb-1 font-bold">
                    {label}
                </label>
            )}
            <select
                className="input-app w-full border"
                id={register.name}
                {...register}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.title} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
            {error?.message && (
                <span className="text-red-600">{`${error.message}`}</span>
            )}
        </div>
    );
};

export default Select;
