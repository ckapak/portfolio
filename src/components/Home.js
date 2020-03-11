import React from 'react'
import Typical from 'react-typical'

class Home extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello! My name is Christine Kapak</h1>
          <div>I am a{' '}
            <Typical
            loop={Infinity}
            wrapper="div"
            steps={[
              'front end developer', 1000, 
              'marketing person', 1000,
              'ski enthuasist', 1000
              ]}
            />
          </div>
        </header>
      </div>

    )
  }
}

export default Home