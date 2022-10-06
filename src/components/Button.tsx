import { ButtonHTMLAttributes } from "react";

interface ButtonProps
    extends React.DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    disabled,
    ...props
}) => {
    return (
        <button
            className={`rounded-lg font-bold px-4 py-2 hover:shadow-lg ${className}`}
            style={{
                opacity: disabled ? "0.5" : "1",
            }}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
