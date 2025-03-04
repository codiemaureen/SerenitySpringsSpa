import React from 'react'
import '../style/serviceLink.css';

const Servicelink = ({image}) => {
  return (
    <div className='flex-container'>
      <img src={image} alt='service-icons' className='flex-items'/>
      <h2 className='flex-items'>Title</h2>
      <p className='flex-items'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum a sint veritatis incidunt doloremque autem quibusdam vel maxime quaerat necessitatibus aliquid explicabo porro doloribus provident, atque inventore facere unde at?</p>
    </div>
  )
}

export default Servicelink
