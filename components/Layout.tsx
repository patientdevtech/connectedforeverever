
import Header from "./Header"
// import type { ReactChildren } from "react"

interface Props {
  child: React.ReactNode
}

export default function Layout({ child }: Props) {
  return (
    <>
      <Header />
      <main>{child}</main>
    </>
  )
}