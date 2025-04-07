import aboutUsImg from '../images/barber-client.jpg'
import '../style/aboutUs.css';

const AboutUs = () => {
  return (
   <div id='aboutContainer'>
    <div className='about-desc'>
      <h2 className='about-header'>About Us</h2>
      <div className='blurb-container'>

      
      <p className='blurb'> At Serenity Springs Spa, beauty meets tranquility. We are a premier destination for indulgent self-care, offering a curated blend of makeup, hair, and nail services designed to rejuvenate and elevate. Our expert team of stylists and artists are passionate about delivering an exceptional experience in an atmosphere of calm sophistication. Whether you're preparing for a special occasion or simply seeking a serene escape, Serenity Springs Spa is where luxury and personal care flow in perfect harmony.</p>
     <img src={aboutUsImg} alt="aboutUsImg" className='about-img'/>
    </div>
   </div>
 </div>
  )
}

export default AboutUs
