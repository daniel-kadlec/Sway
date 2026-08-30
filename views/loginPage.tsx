'use client'
import LoginForm from "@/components/loginForm";
import Image from 'next/image'
import logo from "@/public/logo.svg";
import circles from "@/public/circles.svg";
import {motion} from "motion/react";

export default function LoginPage() {

    return(
        <motion.div className={'gradient-primary min-h-screen flex justify-center items-center relative overflow-hidden'}>

            <motion.div
                className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration:1.5,
                    delay:0.1,
                }}
            >
                <Image src={circles} alt={"Circle decoration"}/>
            </motion.div>

            <motion.div
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration:1.5,
                    delay:0.1,
                }}
            >
                <Image src={circles} alt={"Circle decoration"}/>
            </motion.div>

            <motion.div
                className={"flex flex-col gap-4 items-start justify-center h-screen -mt-12 z-100"}
                initial={{opacity:0,y:30}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.15,duration:0.5}}
            >
                <motion.div
                    initial={{opacity:0,scale:0.9}}
                    animate={{opacity:1,scale:1}}
                    transition={{delay:0.3,duration:0.4}}
                    className={'w-full'}
                >
                    <Image src={logo} alt={"Logo"} className={'w-[65%] mx-auto mb-4'}/>
                </motion.div>

                <motion.div
                    className={"flex flex-col items-start text-offwhite text-xl"}
                    initial={{opacity:0,y:15}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.4,duration:0.4}}
                >
                    <h1 className={'font-bold -mb-1'}>Continue the flow.</h1>
                    <h2>Enter password to access Sway.</h2>
                </motion.div>

                <motion.div
                    initial={{opacity:0,y:15}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.5,duration:0.4}}
                >
                    <LoginForm/>
                </motion.div>
            </motion.div>

        </motion.div>

    );
}