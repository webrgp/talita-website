import React from 'react'

import "../assets/styles/PageHeader.scss"

interface IPageHeader {
  title: string,
  children?: any,
}

const PageHeader: React.FC<IPageHeader> = ({ title, children }) => {
  return (
    <header className="PageHeader">
      <h1>{title}</h1>
      {children}
    </header>
  )
}

export default PageHeader
