import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl:
                "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
        }),
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
    // callbacks: {
    //     redirect: async (url, baseUrl) => {
    //         return Promise.resolve("/dashboard");
    //     },
    // },
};
export default NextAuth(authOptions);