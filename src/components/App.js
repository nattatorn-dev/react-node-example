import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './VideoPlayer'

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <VideoPlayer />
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string
}

export default App
