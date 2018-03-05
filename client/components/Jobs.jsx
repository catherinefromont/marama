import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Jobs extends React.Component {
  render () {
    return (
      <div>
        <img src='/images/bg-stars.png' className='stars-background'/>
        <div className='page-section'>
          <div className='type-section'>
            <div className='page-title-font'>Potential Employers in {this.props.match.params.type}</div>
            {this.props.typeDetails.jobs.map(job => (
              <div key={job.jobs_id}>
                <a href={job.job_link} target='_blank'>{job.job_name}</a>
              </div>
            )
            )}
          </div>
        </div>

        <div>
          <Link to={`/interests/${this.props.match.params.interest}/${this.props.match.params.type}`}>
            <button>Previous Page</button>
          </Link>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    typeDetails: state.typeDetails
  }
}

export default connect(mapStateToProps)(Jobs)
