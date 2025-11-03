import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BsFillBoxFill, BsFillPersonFill, BsPersonCircle } from "react-icons/bs"
import NavLink from "@/components/NavLink"
import { FaKey } from "react-icons/fa6"

export default function AuthLayout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <div
                className="w-full" 
                style={{ 
                    position: 'relative', 
                    width: '90%',
                    height: '400px',
                    marginTop: '12px',
                    borderRadius: '48px'
                }}
            >
                <Image
                    fill
                    src='/bg-image.svg'
                    sizes="100vw" 
                    alt="background image"
                    style={{
                        objectFit: 'cover',
                        borderRadius: '12px'
                    }}
                />
            </div>    
            <header className="text-white flex justify-between items-center z-10 w-3xl absolute top-10">
                <div className="flex items-center gap-x-2">
                    <Image
                        width={24}
                        height={24}
                        src="/dexchange-logo.svg"
                        alt="dexchange logo"
                    />
                    <p className="font-bold">DEXCHANGE SAAS</p>
                </div>
                <div className="flex space-x-4">
                    <NavLink Icon={BsFillBoxFill} name="Dashboard" />
                    <NavLink Icon={BsFillPersonFill} name="Profile" />
                    <NavLink Icon={BsPersonCircle} name="Sign Up" />
                    <NavLink Icon={FaKey} name="Sign In" />
                </div>
                <Button variant={"secondary"}>Call to action</Button>
            </header>
            <main className="flex flex-col items-center gap-y-4 h-full z-10 absolute top-30">
                <h1 className="text-white mb-7 font-bold text-2xl">WELCOME!</h1>
                {children}
            </main>
        </div>
    )
}