import React from 'react'
import { Footer, Navigation } from '..'

type Props = {}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout