import React from 'react'

import styles from './styles/SearchBox.module.css'

class SearchBox extends React.PureComponent {
    render () {
      return (
        <div className={styles.searchBox}>
          <input type='text' placeholder='搜索音乐、MV、歌单、用户' />
          <i className={`${styles.searchIcon} iconfont icon-search`}></i>
        </div>
      )
    }
  }

  export default SearchBox