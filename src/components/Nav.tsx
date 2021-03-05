import React from 'react'
import { Link } from 'gatsby'

const navItems = [
  { url: `/about/`, title: `About Us`},
  { url: `/services/`, title: `Services`},
  { url: `/blog/`, title: `Blog`},
  { url: `/contact/`, title: `Contact Us`},
  { url: `http://talitacamilo.gettimely.com`, title: `Schedule a Visit`},
  { url: `https://talitacamilo.clientportal.com`, title: `Client Portal`},
]

const Nav = () => {
  return (
    <ul className="navbar-nav mr-auto m-md-auto">
      {navItems.map( item => (
        <li key={item.url} className="nav-item">
          {
            item.url.startsWith("http")
            ? <a href={item.url} target="_blank" rel="noreferrer noopener" className="nav-link">{item.title}</a>
            : <Link to={item.url} className="nav-link">{item.title}</Link>
          }
        </li>
      ))}
    </ul>
  )
}

export default Nav
