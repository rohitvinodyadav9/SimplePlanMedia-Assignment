import React from 'react'

function TeacherCard(props) {
  return (
    <div id='teacherCard'>
        <img src={props.img}/>
        <div>
            <h3>{props.name}</h3>
            <h6>{props.type}</h6>
        </div>
    </div>
  )
}

export default TeacherCard