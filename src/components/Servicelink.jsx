import React from 'react'
import '../style/serviceLink.css';
import Service from './Service';


const Servicelink = ({services}) => {
  return (
    <div className='services-container'>
      <h2 className='services-header'>Take a Look at our Services</h2>
      <div className='services'>
        {services.map((service)=> (
          <Service service={service} />
        ))}
      </div>
    </div>
  )
}

export default Servicelink
