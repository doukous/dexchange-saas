import Link from "next/link";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Card } from "./ui/card";
import AuthIconCard from "./IconCard";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";

export default function AuthCard({ mode } : { mode : 'login' | 'register' }) {
    return (
        <Card className="flex flex-col h-172 items-center px-12 py-2">
            {
                mode === 'register' ?
                <h2 className="my-4 font-bold text-xl">Register with</h2>
                :
                <h2 className="my-4 font-bold text-xl">Log in with</h2>
            }
            <div className="flex gap-x-8">
                <AuthIconCard Icon={FaFacebook} />
                <AuthIconCard Icon={FaApple} />
                <AuthIconCard Icon={FaGoogle} />
            </div>
            <strong className="text-gray-400">or</strong>
            <form method="post" className="flex flex-col space-y-8">
                {
                    mode === 'register' &&
                    <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input type="text" placeholder="Name" id="name" />
                    </Field>
                }
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input type="email" placeholder="Email" id="email" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input type="password" placeholder="password" id="password" />
                </Field>
                <div className="flex items-center space-x-2">
                    <FieldLabel htmlFor="remember-switch">Remember me</FieldLabel>
                    <Switch />    
                </div>                
                {
                    mode === 'register' ?
                    <>
                        <Button className="bg-teal-400 hover:bg-teal-600">Sign Up</Button>
                        <span>
                            Already have an account ? {" "}
                            <Link className="text-teal-400" href={"/auth/login"}>Sign In</Link>
                        </span>                    
                    </>
                    :
                    <>
                        <Button className="bg-teal-400 hover:bg-teal-600" type="submit">Sign In</Button>
                        <span>
                            Don&apos;t have an account ? {" "}
                            <Link className="text-teal-400" href={'/auth/register'}>Sign Up</Link>
                        </span>
                    </>
                }
            </form>
        </Card>
    )
}