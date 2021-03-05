import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../assets/styles/site.scss"

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout