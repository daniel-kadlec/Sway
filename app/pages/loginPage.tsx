import {Input} from "@/app/components/Modal/inputs";
import Button from "@/app/components/button";
import { IoIosLock } from "react-icons/io";


import { TbLogin } from "react-icons/tb";

export default function Loginpage () {
    return(
      <div className={"flex flex-col gap-8 items-center justify-center h-screen -mt-12"}>
          <div className={'bg-primary-light rounded-full p-5'}>
            <IoIosLock className={'text-primary size-15'}/>
          </div>
          <div className={'flex flex-col items-center justify-center'}>
              <h1 className={'text-5xl font-bold text-primary'}>Client outreach</h1>
              {/*<h1 className={'text-2xl text-offblack mt-1'}>Židům vstup zakázán</h1>*/}
          </div>
          <form className={'flex flex-col justify-center items-center gap-4 w-[300px]'} action="/api/login" method={"post"}>
              <Input type="password" placeholder={"Password"}/>
              <Button type={"submit"} className={'w-full icon-button gap-1! py-3!'}>
                  <TbLogin/>
                  Login
              </Button>
          </form>
      </div>
    );
}