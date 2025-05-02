import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button } from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";

function SignupPage(){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card className="w-full max-w-md shadow-lg bg-[#4B48BA] text-white">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Create an Account</CardTitle>

                </CardHeader>
                <CardContent>
                <form className="space-y-4">
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        //value=
                        required
                        className="placeholder-white text-white"
                    />
                    <Input
                        className="text-white placeholder: text-white"
                        name="password"
                        type="password"
                        placeholder="Password"
                        //value=
                        required
                    />
                    <Input
                        className="text-white placeholder: text-white"
                        name="confirm password"
                        type="confirm password"
                        placeholder="Confrim Password"
                        //value=
                        required
                    />
                    <Button className="w-full">Sign up</Button>
                </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default SignupPage