import '../assets/styles/PageHeader.scss'

interface IPageHeader {
  title: string
  children?: any
}

const PageHeader = ({ title, children }: IPageHeader) => {
  return (
    <header className="PageHeader">
      <h1>{title}</h1>
      {children}
    </header>
  )
}

export default PageHeader
