import { IoLogoInstagram } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";


export default function Lead(){
    return(
        <div className={'h-30 w-full border-b border-lightgray py-4 px-10 flex flex-col justify-center'}>
            <span className={'flex gap-2 items-center'}>
                <h1 className={'font-bold text-3xl text-offblack'}>El Negro</h1>
                <IoLogoInstagram size={30} className={'text-primary mt-0.5'}/>
            </span>
            <span className={'mt-2 -ml-1 flex gap-4 items-center'}>
                <span className={'bg-primary-light text-primary px-4 py-0.5 rounded-full font-bold text-lg'}>Stage</span>
                <span className={'flex items-center gap-2 text-primary'}>
                    <FaRegCalendar size={20}/>
                    <span className={'text-lg font-semibold'}>12.2.</span>
                    <FaRegClock size={20}/>
                    <span className={'text-lg font-semibold'}>Today</span>
                </span>
            </span>
        </div>
    )
}