import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextAreaProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    className?: string;
    style?: any;
    label?: string;
    register: RegisterType;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const TextArea: React.FC<TextAreaProps> = ({
    children,
    className = "",
    style = {},
    label,
    register,
    error,
    ...props
}) => {
    return (
        <div className={`${className}`} style={style}>
            {label && (
                <label htmlFor={register.name} className="block mb-1 font-bold">
                    {label}
                </label>
            )}
            <textarea
                rows={4}
                className="input-app w-full border"
                id={register.name}
                {...register}
                {...props}
            ></textarea>
            {error?.message && (
                <span className="text-red-600">{`${error.message}`}</span>
            )}
        </div>
    );
};

export default TextArea;
