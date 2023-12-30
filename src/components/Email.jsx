import React from 'react'

function Email() {
  return (
    <div id='email'>
    <div id='emailOne'>
        <div id='first'>
            <h1>Start learning new skills today and <br/> pursue your passion</h1>
        </div>
        <div id='second'>
            <p>Join the community of global learner and start learning today</p>
        </div>
        <div id='third'>
            <input type='email' placeholder='Enter your email' />
            <button>Get Started <img src='./arrow-right-circle.png' /></button>
        </div>
    </div>
    </div>
  )
}

export default Email