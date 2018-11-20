import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Navs.module.css'

class Navs extends React.PureComponent {
    render () {
      const tabs = [
        {label: '音乐馆', value: 'musicHall'},
        {label: '我的音乐', value: 'myMusic'},
        {label: '客户端', value: 'client'},
        {label: '音乐号', value: 'musicalBlog'},
        {label: 'VIP', value: 'vip'},
      ]
      return (
        <ul className={styles.navs}>
          {tabs.map((tab) => (
            <li className={styles.navItem}>
              <Link className={styles.link} to={tab.value}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      )
    }
  }

  export default Navs