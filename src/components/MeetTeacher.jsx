import React from 'react'
import TeacherCard from './TeacherCard'

function MeetTeacher() {
  return (
    <div id="meetTeacher">
      <button>	&lt;</button><button>	&gt;</button>
      <h1>Meet our teachers</h1>
      <div>
      <TeacherCard img="teacher.jpg" name="Karandeep" type="YOGA" />
      <TeacherCard img="teacher1.jpg" name="Samule" type="PHYSICAL EDUCATION"/>
      <TeacherCard img="teacher2.jpg" name="Kiraa" type="MATHS"/>
      <TeacherCard img="teacher3.jpg" name="Neslaon" type="SCIENCE"/>
      </div>
    </div>
  )
}

export default MeetTeacher