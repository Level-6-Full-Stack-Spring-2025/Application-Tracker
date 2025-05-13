// import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button } from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";

//when utilizing component in a page, use this className for grey background: "min-h-screen flex items-center justify-center bg-gray-100 px-4"

function Signup(){
    return(
        <div>
            <Card className="w-full max-w-md shadow-lg bg-card text-white font-lalezar">
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
                    />
                    <Input
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
                        placeholder="Confirm Password"
                        //value=
                        required
                    />
                    <Button className="w-full text-md mt-3">Sign up</Button>
                </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Signup