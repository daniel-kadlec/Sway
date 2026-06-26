import LoginForm from "@/components/loginForm";
import Image from 'next/image'
import logo from "@/public/logo.svg";

export default async function LoginPage() {

    return(
        <div className={'gradient-primary min-h-screen flex justify-center items-center'}>
            <div className={"flex flex-col gap-4 items-start justify-center h-screen -mt-12"}>
                <Image src={logo} alt={"Logo"} className={'w-[65%] mx-auto mb-4'}/>
                <div className={"flex flex-col items-start text-offwhite text-xl"}>
                    <h1 className={'font-bold -mb-1'}>Continue the flow.</h1>
                    <h2>Enter password to access sway.</h2>
                </div>
                <LoginForm/>
            </div>
        </div>

    );
}