import React from "react"

// You can import global CSS files here.
import "../src/assets/styles/site.scss"

// No-op wrapper.
export const Wrapper: React.FC = ({ children }) => {
  return <>{children}</>
}
