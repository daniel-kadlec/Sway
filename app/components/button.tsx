type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "submit" | "reset" | "button";
};
export default function Button({children, onClick, className, type}: ButtonProps){
    return (
        <button
            onClick={onClick}
            type={type}
            className={`bg-primary text-white px-6 py-2 rounded-xl text-lg transition duration-300 hover:bg-primary-dark min-w-[110px] cursor-pointer hover:opacity-80 ${className}`}
        >
            {children}
        </button>
    );
}