interface WrapperProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    children?: React.ReactNode;
    className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
    children,
    className = "",
    ...props
}) => {
    return (
        <div
            className={`w-screen h-screen bg-slate-100 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Wrapper;
