import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"


import type { GetServerSidePropsContext } from "next"
import type { Session } from "next-auth"

export default function ServerSidePage({ session }: { session: Session }) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  return (
      <pre>{JSON.stringify(session, null, 2)}</pre>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}

//resource: https://github.com/nextauthjs/next-auth-example/blob/main/components/header.tsx