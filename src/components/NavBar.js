import '../style/navBar.css'
import Button from './Button';
import { BsBag } from "react-icons/bs";
import Header from './Header';


const NavBar = () => {
 let navItems = ['home', 'about', 'services', 'lookbook', 'news', <Button title={'cart'} icon={<BsBag color='white'/>} /> , 'Book Online']
  return (
   <div id='navBar'>
    <nav>
    <p className='headerTitle'>Serenity Springs Spa</p>
    {navItems.map((items) => (
      <ol>
      <li>{items}</li>
      </ol>
    ))}
    </nav>
   </div>
  )
}

export default NavBar
