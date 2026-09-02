import { FaCheck } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ToastType } from "@/context/ToastContext";
import { AnimatePresence, motion } from "motion/react";

type Props = {
    toasts: ToastType[];
};

const variants = {
    success: {
        bgLight: "bg-success/20",
        bg: "bg-success",
        iconColor: "text-offblack",
        icon: FaCheck,
        iconSize: 14,
    },
    warning: {
        bgLight: "bg-warning/20",
        bg: "bg-warning",
        iconColor: "text-offblack",
        icon: IoIosWarning,
        iconSize: 20,
    },
    error: {
        bgLight: "bg-error/20",
        bg: "bg-error",
        iconColor: "text-offblack",
        icon: IoClose,
        iconSize: 24,
    },
};

export default function ToastContainer({ toasts }: Props) {
    return (
            <div className="fixed top-4 right-4 flex flex-col gap-2 z-999999">
                <AnimatePresence mode="popLayout">
                {toasts.map((toast) => {
                    const variant = variants[toast.type];
                    const Icon = variant.icon;

                    return (
                        <motion.div
                            layout="position"
                            key={toast.id}
                            className={`bg-offblack shadow-inner-light text-offwhite relative px-6 py-4 rounded-xl overflow-hidden shadow-primary min-w-[400px] flex justify-start`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{
                                layout: {
                                    type: "spring",
                                    duration: 1.2,
                                },
                                x: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 18,
                                    ease: "easeOut"
                                },
                                opacity: {
                                    duration: 0.2,
                                },
                            }}>

                            {/*gradient*/}
                            <div className={`absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[100px] h-[100px] rounded-full blur-[80px] ${variant.bg}`}/>

                            <div className="flex gap-3 justify-center items-center mb-1 z-10">
                                <div className={`${variant.bgLight} rounded-full p-2 flex justify-center items-center`}>
                                    <div className={`${variant.bg} w-7 h-7 rounded-full mt-0.5 flex justify-center items-center`}>
                                        <Icon className={`${variant.iconColor}`} size={variant.iconSize}/>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <span className={`font-bold text-xl ${toast.description ? "-mb-2" : ""}`}>
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
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: 0 }}
                                transition={{ duration: 3, ease: "linear" }}
                                className={`${variant.bg} bottom-0 left-0 w-full h-1 absolute`}
                            />
                        </motion.div>
                    );
                })}
                </AnimatePresence>
            </div>
    );
}