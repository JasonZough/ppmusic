import * as React from 'react'

import Navs from './Navs'
import SearchBox from './SearchBox'
import Profile from './profile'

import logo from '../../assets/img/logo.png'
import styles from './styles/index.module.css'


class Header extends React.PureComponent {
    render () {
      return (
        <header className={styles.header}>
          <img className={styles.logo} src={logo} alt='logo' />
          <Navs/>
          <SearchBox/>
          <Profile/>
          <button className={styles.openVipBtn}>开通绿钻豪华版</button>
          <button className={styles.openChargeBtn}>开通付费包</button>
        </header>
      )
    }
}

export default Header