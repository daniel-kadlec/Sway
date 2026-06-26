import LoginForm from "@/components/loginForm";
import Image from 'next/image'
import logo from "@/public/logo.svg";
import circles from "@/public/circles.svg";
export default async function LoginPage() {

    return(
        <div className={'gradient-primary min-h-screen flex justify-center items-center relative overflow-hidden'}>
            <Image src={circles} alt={"Circle decoration"} className={'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'}/>
            <Image src={circles} alt={"Circle decoration"} className={'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2'}/>
            <div className={"flex flex-col gap-4 items-start justify-center h-screen -mt-12 z-100"}>
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