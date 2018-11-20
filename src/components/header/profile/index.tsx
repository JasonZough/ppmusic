import React from 'react'

import AuthedAvater from '../../common/AuthedAvater'
import Dropdown from './Dropdown'

class Profile extends React.PureComponent {
    render () {
      return (
        <div className='ph-profile'>
          {/* <a className='php-loginBtn' href='javascript:void(0)'>login</a> */}
          <AuthedAvater/>
          <Dropdown/>
        </div>
      )
    }
  }

  export default Profile