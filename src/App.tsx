import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <Page className='stretch'>
        </Page>
      </Router>
    )
  }
}

/* styles */

const Page = styled.div`
  position: fixed;
`

export default App