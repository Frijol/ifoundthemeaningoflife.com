import * as React from "react"
import { Link } from 'gatsby'
import '../styles/Sidebar.scss'

const Sidebar = ({links, pageTitle}) =>
  <aside>
      {
        links.map(link => 
            <React.Fragment key={link.url}><Link key={link.url} to={link.url} className={pageTitle.localeCompare(link.text, undefined, { sensitivity: 'base' }) === 0 ? 'active' : "inactive"}>{link.text}</Link><hr /></React.Fragment>)
      }
  </aside>

export default Sidebar
