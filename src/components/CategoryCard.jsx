import React from 'react'

function CategoryCard(props) {
  return (
    <div id='categoryCard'>
        <div>
        <img src={props.img}/>
        <p>{props.value}</p>
        </div>
    </div>
  )
}

export default CategoryCard