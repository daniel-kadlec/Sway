'use client'
import {Input} from "@/app/components/Modal/inputs";
import Button from "@/app/components/button";
import {useState} from "react";
import { TbLogin } from "react-icons/tb";
import {useToast} from "@/app/context/ToastContext";

export default function LoginForm(){
    const [password, setPassword] = useState("");

    const {showToast} = useToast();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            window.location.href = "/";
            showToast("Logged in successfully");
        } else {
            showToast("Incorrect password");
        }
    }

    return(
        <form className={'flex flex-col justify-center items-center gap-4 w-[300px]'} onSubmit={handleSubmit}>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder={"Password"}/>
            <Button type={"submit"} className={'w-full icon-button gap-1! py-3!'}>
                <TbLogin/>
                Login
            </Button>
        </form>
    );
}