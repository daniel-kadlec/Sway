import { IoClose } from "react-icons/io5";

type ToastType = {
    id: string;
    message: string;
    description?: string;
};

type Props = {
    toasts: ToastType[];
};

export default function ToastContainer({ toasts }: Props) {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-999999">
            {toasts.map((toast) => (
                // Toast
                <div
                    key={toast.id}
                    className="bg-white text-offblack relative px-6 py-3 rounded-xl overflow-hidden shadow-primary flex justify-center items-center toastPresence"
                >
                    <div className={'flex gap-3 justify-center items-center mb-1'}>
                        <div className={'bg-error-light p-1 rounded-full mt-0.5'}>
                            <IoClose className={'text-error w-6 h-6'}/>
                        </div>
                        <div className={'flex flex-col justify-center items-start'}>
                        <span className={'font-bold -mb-2 text-xl'}>
                            {toast.message}
                        </span>
                            {toast.description &&
                                <span className={'text-lg'}>
                            {toast.description}
                        </span>
                            }
                        </div>
                    </div>

                    <div className={'bottom-0 left-0 w-full h-1 bg-error absolute toastCountdown'}/>
                </div>
            ))}
        </div>
    );
}