import React from 'react'

import AuthedAvater from '../../common/AuthedAvater'

class Menus extends React.PureComponent {
    render () {
      const menuItems = [
        {
          title: '绿钻豪华版', 
          desc: '开通立即赠送付费音乐包',
          handler: () => {},
          btnText: '开通',
          btnHandler: () => {},
        },
        {
          title: '付费音乐包',
          desc: '畅享千万包月曲库',
          handler: () => {},
          btnText: '开通',
          btnHandler: () => {}
        },
        {
          title: '评论通知',
          handler: () => {}
        },
        {
          title: '退出QQ登录',
          handler: () => {}
        },
      ]
      return (
        <div className='php-dropdown'>
          <div className='phpd-header'>
            <AuthedAvater/>
            <p className='hpdh-name'>Jason</p>
            <div className='hpdh-badges'>
              <img className='pdhb-vipBadge'/>
              <img className='pdhb-musicBadge'/>
            </div>
          </div>
          <ul className='phpd-menu'>
            {menuItems.map((item) => (
              <li className='hpdm-item'>
                <div className='pdmi-left'>
                  <a href='javascript:void(0)' className='dmil-title'>{item.title}</a>
                  {item.desc && (
                    <p className='dmil-desc'>{item.desc}</p>
                  )}
                </div>
                {item.btnText && (
                  <div className='pdmi-right'>
                    <button className='dmir-btn'>{item.btnText}</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  export default Menus