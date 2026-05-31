import { IoIosLock } from "react-icons/io";
import LoginForm from "@/components/loginForm";
export default async function LoginPage() {

    return(
        <div className={"flex flex-col gap-8 items-center justify-center h-screen -mt-12"}>
            <div>
                <IoIosLock className={'text-primary'} size={80}/>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
                <h1 className={'text-5xl font-bold text-primary'}>Client outreach</h1>
                {/*<h1 className={'text-2xl text-offblack mt-1'}>Židům vstup zakázán</h1>*/}
            </div>
            <LoginForm/>
        </div>
    );
}