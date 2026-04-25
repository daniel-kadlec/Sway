import { FaCheck } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ToastType } from "@/context/ToastContext";

type Props = {
    toasts: ToastType[];
};

const variants = {
    success: {
        bgLight: "bg-success-light",
        bg: "bg-success",
        iconColor: "text-success",
        icon: FaCheck,
        iconSize: 18,
    },
    warning: {
        bgLight: "bg-warning-light",
        bg: "bg-warning",
        iconColor: "text-warning",
        icon: IoIosWarning,
        iconSize: 20,
    },
    error: {
        bgLight: "bg-error-light",
        bg: "bg-error",
        iconColor: "text-error",
        icon: IoClose,
        iconSize: 24,
    },
};

export default function ToastContainer({ toasts }: Props) {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 flex flex-col gap-2 z-999999">
            {toasts.map((toast) => {
                const variant = variants[toast.type];
                const Icon = variant.icon;

                return (
                    <div
                        key={toast.id}
                        className={`bg-white text-offblack relative px-6 py-3 rounded-xl overflow-hidden shadow-primary flex justify-center items-center toastPresence min-w-[200px]`}
                    >
                        <div className="flex gap-3 justify-center items-center mb-1">
                            <div className={`${variant.bgLight} w-9 h-9 rounded-full mt-0.5 flex justify-center items-center`}>
                                <Icon className={`${variant.iconColor}`} size={variant.iconSize}/>
                            </div>

                            <div className="flex flex-col justify-center items-start">
                                <span className="font-bold -mb-2 text-xl">
                                    {toast.message}
                                </span>

                                {toast.description && (
                                    <span className="text-lg">
                                        {toast.description}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div
                            className={`${variant.bg} bottom-0 left-0 w-full h-1 absolute toastCountdown`}
                        />
                    </div>
                );
            })}
        </div>
    );
}