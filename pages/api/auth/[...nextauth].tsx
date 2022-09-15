import NextAuth, { NextAuthOptions } from "next-auth"
import { unstable_getServerSession } from "next-auth"
// import { authOptions } from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"

import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async session({ session }) {
      return session
    },
  },
}

export default NextAuth(authOptions) 
// export default NextAuth(authOptions);
//  async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await unstable_getServerSession(req, res, authOptions)
//   res.send(JSON.stringify(session, null, 2))
// }

// export default NextAuth(authOptions)

// resource: https://next-auth.js.org/getting-started/typescript#module-augmentation


// import NextAuth from "next-auth"
// import type { NextAuthOptions } from 'next-auth'
// // import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { unstable_getServerSession } from "next-auth/next"

// // import TwitterProvider from "next-auth/providers/"
// import FacebookProvider from "next-auth/providers/facebook"

// export const authOptions: NextAuthOptions = {
//     providers: [
//         // TwitterProvider({
//         //     clientId: process.env.TWITTER_ID,
//         //     clientSecret: process.env.TWITTER_SECRET,
//         //     version: "2.0", //opt-in to Twitter OAuth 2.0
//         // }),
//         FacebookProvider({
//             clientId: process.env.FACEBOOK_CLIENT_ID,
//             clientSecret: process.env.FACEBOOK_CLIENT_SECRET
//         })
//         // https://next-auth.js.org/providers/facebook
//     ]

//     // https://next-auth.js.org/configuration/providers/oauth

//     // https://next-auth.js.org/getting-started/example
// }

// export default NextAuth(authOptions) = ({
//     callbacks: {
//         session({ session, token, user }) {
//             return session 
//         }
//     }
// })
// export async function getServerSideProps(context) {
//     const session = await unstable_getServerSession(context.req, context.res, authOptions)
  
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       }
//     }
  
//     return {
//       props: {
//         session,
//       },
//     }
//   }