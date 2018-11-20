import React from 'react'
import defaultAvater from '../../assets/img/g.jpg'
import qqIcon from '../../assets/img/login_qq.png'

const AuthedAvater = () => (
    <div className='authedAvater'>
      <img className='avater' src={defaultAvater}/>
      <img className='appIcon' src={qqIcon} />
    </div>
  )

export default AuthedAvater
