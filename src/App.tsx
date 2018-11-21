import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import s from './styles/App.module.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <div className={s.page}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}

export default App