import React from 'react'

class SearchBox extends React.PureComponent {
    render () {
      return (
        <div className='ph-searchBox'>
          <input type='text' placeholder='搜索音乐、MV、歌单、用户' />
          <i className='phs-searchIcon iconfont icon-search'></i>
        </div>
      )
    }
  }

  export default SearchBox