import React from 'react'
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (<div className="not-found">
    <h1>This poll does not exist. Go back!</h1>
    <Link to={`/`} className="button action">Take me home</Link>
  </div>)

}
export default NotFound
