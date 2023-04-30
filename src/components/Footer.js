import * as React from "react"
import '../styles/Footer.scss'
import {FooterSocialLinks} from '../helpers/constants'

const Footer = ({organization='Kelsey Breseman'}) =>
  <footer>
    <div className='container'>
      <div className='socialMediaLinks row'>
      {
        FooterSocialLinks.map(link => <a href={link.url} title={link.title} target='_blank' rel='noreferrer'><img src={link.logo} alt={link.title}/></a>)
      }
      </div>
      <p>© {organization} {new Date().getFullYear()}.</p>
    </div>
  </footer>

export default Footer
