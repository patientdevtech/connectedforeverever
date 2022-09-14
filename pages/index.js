
import Head from 'next/head';
import Header from '../components/Header'
import Layout from "../components/Layout"
import { signIn } from "next-auth/react"
import{ GetServerSideProps } from "next-auth/react"

export default function Home() {
  return (
    <div className="h-screen bg-tan-100 overflow-hidden">
    <Head>
      <title>Connected Forever-ever</title>
    </Head>
    
    <Header />
    
    <main className="flex">
      {/* <Sidebar />
      <Feed />
      <Connections /> */}
    </main>
    <button onClick={() => signIn("facebook")}>
      Sign In
    </button>
  </div>
);
}











// Source:???
// export default function IndexPage() {
//   // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
//   const { data: session } = useSession()

//   return (
//     props: {}
//   )
// }







// // https://stackoverflow.com/questions/71676115/next-auth-props-to-page-undefined-although-passed-from-getserversideprops
// // Next.js, through its pageProps, makes use of the session prop in pages. So when we're trying to pass session directly from getServerSideProps, it is undefined for some reason on the client component.
// // In short, just return the user from session, or rename the session variable to something else.
// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = await unstable_getServerSession(req, res, authOptions);
//   const user = session?.user;
//   if (!user) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       user,
//     },
//   };
// };


//papareact code:
// export async function getServerSideProps(context) {
//   const session = await getSession(context);
// }
//error--> Server Error:ReferenceError: getSession is not defined. This error happened while generating the page. Any console logs will be displayed in the terminal window.   
// > 29 | const session = await getSession(context);
//      |                ^
//   30 | }
