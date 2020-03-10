import React from 'react'
import './App.css'
import Typical from 'react-typical'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello! My name is Christine Kapak</h1>
          <p>I am a{' '}
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              'front end developer', 1000, 
              'marketing person', 1000,
              'ski enthuasist', 1000
              ]}
            />
          </p>
        </header>
      </div>

    )
  }
}

export default App