import { Link } from "gatsby"
import React from "react"

const defaultNavItems = [
  { url: `/about/`, title: `About Us` },
  { url: `/services/`, title: `Services` },
  // { url: `/blog/`, title: `Blog`},
  { url: `/contact/`, title: `Contact Us` },
  // { url: `http://talitacamilo.gettimely.com`, title: `Schedule a Visit` },
  { url: `https://talitacamilo.clientportal.com`, title: `Client Portal` },
]

interface INav {
  onLinkClick: any,
  additionalNavItems?: Array<{ url: string, title: string }>
}

const Nav: React.FC<INav> = ({ onLinkClick, additionalNavItems }) => {

  const navItems = [
    ...defaultNavItems,
    ...(additionalNavItems || []),
  ]

  return (
    <ul className="navbar-nav justify-content-center">
      {navItems.map(item => (
        <li key={item.url} className="nav-item">
          {item.url.startsWith("http") ? (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="nav-link"
            >
              {item.title}
            </a>
          ) : (
            <Link to={item.url} className="nav-link" onClick={onLinkClick}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Nav
