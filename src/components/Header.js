import * as React from "react"
import { Link } from 'gatsby'
import '../styles/Header.scss'
import { HeaderLinks } from '../helpers/constants'
import HeaderItem from '../components/HeaderItem'

const Header = ({activeLink}) =>
  <header>
    <div className='container'>
      <Link id='HeaderLogo' to="/"/>
      <label>
        <input type='checkbox' />
        <nav> 
        <div className='MenuIcon'></div>
        {
          HeaderLinks.map(link => <HeaderItem link={link} activeLink={activeLink} />)
        }
      </nav>
      </label>
    </div>
  </header>

export default Header
