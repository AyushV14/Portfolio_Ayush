import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Introduction from './introduction/Introduction'
import Scroll from './scroll/Scroll'
export default function Home() {
  return (
    <div className='Home-container'>
      <Navbar/>
        <div className='home-content'>
            <div className='Introduction'>
                <Introduction/>
            </div>
            <div className='scroll-info'>
                <Scroll/>
            </div>
          
        </div>
    </div>
  )
}
