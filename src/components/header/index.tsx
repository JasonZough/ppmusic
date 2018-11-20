import * as React from 'react'

import logo from '../../assets/img/logo.png'

import Navs from './Navs'
import SearchBox from './SearchBox'
import Profile from './profile'

class Header extends React.PureComponent {
    render () {
      return (
        <header className='p-header'>
          <img className='ph-logo' src={logo} alt='logo' />
          <Navs/>
          <SearchBox/>
          <Profile/>
          <button className='ph-openVipBtn'>开通绿钻豪华版</button>
          <button className='ph-openChargeBtn'>开通付费包</button>
        </header>
      )
    }
}

export default Header