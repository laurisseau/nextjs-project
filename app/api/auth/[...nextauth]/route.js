import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        }),
        /*
        async session({session}){

        }
        */
    ]
})

export {handler as GET, handler as POST}