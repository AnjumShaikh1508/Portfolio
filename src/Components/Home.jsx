import React from 'react'
import  image from '../assets/Anjum_Shaikh_Image.png'
import '../CSS/Home.css'

const Home = () => {

  return (
    <div className='home'>
      <div className='info'>
        <h3>Hello 👋, I`m</h3>
        <h1>Anjum Shaikh</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className='image'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Home