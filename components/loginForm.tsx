'use client'

import { Input } from "@/components/Modal/inputs";
import Button from "@/components/button";
import { useState } from "react";
import { TbLogin } from "react-icons/tb";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";
import login from "@/lib/utils/auth/login";
import {motion} from "motion/react";

export default function LoginForm() {
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { showToast } = useToast();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!password) {
            showToast(
                "Password is required",
                "Please enter your password!",
                "error"
            );
            return;
        }

        const result = await login(password);

        if (result.success) {
            showToast("Logged in successfully","Welcome back!","success");

            router.push("/");
            router.refresh();
        } else {
            showToast(
                "Incorrect password","Try again!","error");
        }
    }

    return (
        <form
            className="flex flex-col justify-center items-center gap-4 w-[400px]"
            onSubmit={handleSubmit}
        >
            <motion.div
                className="w-full"
                initial={{opacity:0,y:15}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.55,duration:0.4}}
            >
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={"w-full !rounded-full !bg-offwhite !text-darkgray shadow-inner-dark"}
                />
            </motion.div>

            <motion.div
                className="w-full"
                initial={{opacity:0,y:15}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.65,duration:0.4}}
            >
                <Button type="submit" className="w-full icon-button !gap-1 !py-3 text-xl font-semibold gradient-dark !rounded-full inner-shadow-light">
                    <TbLogin size={24}/>
                    Enter Sway
                </Button>
            </motion.div>
        </form>
    );
}