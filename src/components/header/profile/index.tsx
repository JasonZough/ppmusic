import React from 'react'

import AuthedAvater from '../../common/AuthedAvater'
import Dropdown from './Dropdown'

import styles from './index.module.css'

class Profile extends React.PureComponent {
    render () {
      return (
        <div className={styles.profile}>
          {/* <a className='php-loginBtn' href='javascript:void(0)'>login</a> */}
          <AuthedAvater/>
          <Dropdown/>
        </div>
      )
    }
  }

  export default Profile