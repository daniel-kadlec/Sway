type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
export default function Button({children, onClick, className}: ButtonProps){
    return (
        <button
            onClick={onClick}
            className={`bg-primary text-white px-6 py-3 rounded-xl text-2xl transition duration-300 hover:bg-primary-dark min-w-[130px] ${className}`}
        >
            {children}
        </button>
    );
}