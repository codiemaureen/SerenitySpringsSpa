import aboutUsImg from '../images/barber-client.jpg'
import '../style/aboutUs.css';

const AboutUs = () => {
  return (
   <div id='aboutContainer'>
      <h2 className='about-header'>About Us</h2>
    <div className='about-desc'>
      <p className='blurb'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate sed laboriosam nemo hic cum blanditiis nihil impedit facere aspernatur?</p>
     <img src={aboutUsImg} alt="aboutUsImg" className='about-img'/>
    </div>
   </div>
  )
}

export default AboutUs
