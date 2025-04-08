import '../style/services.css';


const Service = ({service}) => {
  return (
      <div className='service-container'>
          <h1>{service.title}</h1>
          <img src={service.image} alt={service.title} className='service-image'/>
          <p className='service-description'>{service.description}</p>
          <a href='' target='_blank' className='book-btn'>Book Now!</a>

      </div>
  )
}

export default Service
