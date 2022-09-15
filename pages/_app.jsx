import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
// import type { AppProps } from "next/app"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}








// resource: https://next-auth.js.org/getting-started/client



// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
// export default function App({ Component, pageProps }) {
//   return (
//     <SessionProvider session={pageProps.session} refetchInterval={0}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

// https://github.com/nextauthjs/next-auth-example/blob/main/pages/_app.tsx


// https://next-auth.js.org/getting-started/example
// export default function App({
  //   Component,
  //   pageProps: { session, ...pageProps },
  // }) {
  //   return (
  //     <SessionProvider session={session}>
  //       <Component {...pageProps} />
  //     </SessionProvider>
  //   )
  // }

