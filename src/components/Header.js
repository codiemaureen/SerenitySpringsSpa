import NavBar from './NavBar';
import '../style/header.css';

const Header = () => {
  return (
    <section id='header'>
     <NavBar/>
      <h1 className='page-header'>Serenity Springs Spa</h1>
    </section>
  )
}

export default Header
