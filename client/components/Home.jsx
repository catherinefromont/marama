import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  // componentDidMount () {
  //   this.getInterestInfo()
  // }

  render () {
    return (
      <div className='home-section'>
        <h1>Mārama</h1>
        <Link to='/:interest'>
          <button>Gaming</button>
        </Link>
      </div>
    )
  }
}

export default Home
