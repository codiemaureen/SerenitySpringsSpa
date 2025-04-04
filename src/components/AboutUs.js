import aboutUsImg from '../images/hair.jpg'
import '../style/aboutUs.css';

const AboutUs = () => {
  return (
   <div id='aboutContainer'>
    <div className='about-desc'>
      <h2 className='about-header'>About Us</h2>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptate sed laboriosam nemo hic cum blanditiis nihil impedit facere aspernatur?</p>
    </div>
     <img src={aboutUsImg} alt="aboutUsImg" className='about-img'/>
   </div>
  )
}

export default AboutUs
