import React from 'react'
import CommunityCard from './CommunityCard'

function Community() {
  return (
    <div id="community">
        <h1>Love from Community</h1>
        <div>
            <CommunityCard img="Ellipse 12.png" name="Karaneep"/>
            <CommunityCard img="Ellipse.png" name="Kalpana"/>
            <CommunityCard img="Ellipse 12.png" name="Priti"/>
        </div>
    </div>
  )
}

export default Community