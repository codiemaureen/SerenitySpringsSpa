import '../style/services.css';

const Service = ({service}) => {
  return (
      <div className='service-container'>
          <h1>{service.title}</h1>
          <img src={service.image} alt={service.title} className='service-image'/>
          <p>{service.description}</p>
      </div>
  )
}

export default Service
