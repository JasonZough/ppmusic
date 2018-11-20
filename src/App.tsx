import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer/index'
import MusicHall from './components/music-hall/index'

import styles from './App.module.css'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <div className={styles.page}>
          <Header/>
          <main className={styles.main}>
            <Route exact path='/' component={MusicHall} />
          </main>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App