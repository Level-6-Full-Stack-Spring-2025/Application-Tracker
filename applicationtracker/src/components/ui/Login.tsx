// import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button } from "@/components/ui/button";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"; 

//when utilizing component in a page, use this className for grey background: "min-h-screen flex items-center justify-center bg-gray-100 px-4"

function Login(){
    return(
        <div>
            <Card className="w-full max-w-md shadow-lg bg-card text-white font-lalezar">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Log In</CardTitle>

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
                    
                    <Button className="w-full text-md mt-3">Log In</Button>
                </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login