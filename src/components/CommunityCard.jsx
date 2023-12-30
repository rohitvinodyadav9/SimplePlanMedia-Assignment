import React from 'react'

function CommunityCard(props) {
  return (
    <div id='communityCard'>
            {/* <h1>&ldquo;</h1> */}
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui pariatur sit minus dolorum ipsum quia neque id.</p>

    </div>
  )
}

export default CommunityCard