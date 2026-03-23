type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
export default function Button({children, onClick, className}: ButtonProps){
    return (
        <button
            onClick={onClick}
            className={`bg-primary text-white px-6 py-2 rounded-xl text-lg transition duration-300 hover:bg-primary-dark min-w-[110px] cursor-pointer hover:opacity-85 ${className}`}
        >
            {children}
        </button>
    );
}