import React from 'react'

function ReasonCard(props) {
  return (
    <div id='reasonCard'>
        <div>
        <img src={props.img}/>
        <div id='para'>
        <p>Interactive live online classes at your convenient time slots</p>
        </div>
        </div>
    </div>
  )
}

export default ReasonCard