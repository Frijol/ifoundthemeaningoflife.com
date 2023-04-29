import * as React from "react"
import '../styles/Notification.scss'

const Notification = ({pageTitle, notificationText, link}) =>
  <div id='Notification'>
    { pageTitle === 'Home' ? // Only displays on homepage
        <label>
          <input type='checkbox'/>
          <nav>
            <div id='CloseIcon'></div>
            <a href={link} target='_blank'>
              <strong>{notificationText}</strong>
            </a>
          </nav>
        </label>
      : null
    }
  </div>
export default Notification
