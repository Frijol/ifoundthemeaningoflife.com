import * as React from "react"
import { Link } from 'gatsby'

const HeaderItem = ({link, activeLink}) =>
  <div className='headerItem'>
    {
      // Using a ternary operator, if the header link is to an external site, then use a traditional anchor tag and open in a new page.
      // Otherwise, if the header link is an internal link use a Gatsby Link (for performance) and open in the current tab.
      (link.url.includes('http') || link.url.includes('https')) ? 
        <a key={link.url} href={link.url} className={activeLink === link.text ? 'active button' : "inactive button"} target='_blank' rel='noreferrer noopener'>
          {link.text}
        </a>
        : 
        <Link key={link.url} to={link.url} className={activeLink === link.text ? 'active' : "inactive"}>
          {link.text}
        </Link>
    }
    
    {
      link.sublinks ? <ul>{link.sublinks.map(sublink => <Link to={sublink.url}><li className='headerSublink'>{sublink.text}</li></Link>)}</ul> : null
    }
    
  </div>

export default HeaderItem
