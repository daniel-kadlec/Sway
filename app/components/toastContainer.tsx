type ToastType = {
    id: string;
    message: string;
};

type Props = {
    toasts: ToastType[];
};

export default function ToastContainer({ toasts }: Props) {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2">
            {toasts.map((toast) => (
                // Toast
                <div
                    key={toast.id}
                    className="bg-offwhite text-offblack px-4 py-2 rounded shadow-primary"
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
}