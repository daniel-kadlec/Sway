'use client'
import Button from "@/components/button";
import Link from "next/link";

export default function NotFound(){
    return(
        <div className={'flex flex-col justify-center items-center gap-4 h-screen mb-8'}>
            <h1 className={'text-primary font-bold text-6xl'}>404</h1>
            <h2 className={'text-4xl'}>Page not found</h2>
            <Link href={"/dashboard"}>
                <Button className={'px-8! py-4! text-2xl! mt-3 text-primary! bg-primary-light!'}>
                    Go Home
                </Button>
            </Link>
        </div>

    );
}