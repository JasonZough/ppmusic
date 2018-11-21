import React from 'react'

import s from '@/styles/Header.module.css'
import logo from '../../assets/img/logo.png'

import Navs from './Navs'
import SearchBox from './SearchBox'
import AuthInfo from './AuthInfo'

class Header extends React.PureComponent {
    render () {
        return (
            <header className={s.header}>
                <img className={s.logo} src={logo}/>
                <Navs/>
                <SearchBox/>
                <AuthInfo/>
                <button className={s.openVipBtn}>开通绿钻豪华版</button>
                <button className={s.openChargeBtn}>开通付费包</button>
            </header>
        )
    }
}

export default Header