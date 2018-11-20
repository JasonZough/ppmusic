import React from 'react'
import { Link } from 'react-router-dom'

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
        <ul className='ph-navs'>
          {tabs.map((tab) => (
            <li className='phn-navItem'>
              <Link className='phnn-link' to={tab.value}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      )
    }
  }

  export default Navs