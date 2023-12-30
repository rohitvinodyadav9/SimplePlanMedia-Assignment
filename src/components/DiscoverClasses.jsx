import React from 'react'
import ClassComponent from './ClassComponent'

function DiscoverClasses() {
  return (
    <div className='discover'>
        <div id="one">
        <h1>Discover Classes</h1>
        <h3>SEE ALL</h3>
        </div>
        <div>
        <p>Choose from a variety of classes from around the world.</p>
        </div>
        <div id="two">
            <ClassComponent />
            <ClassComponent />
            <ClassComponent />
            <ClassComponent />
        </div>
    </div>
  )
}

export default DiscoverClasses