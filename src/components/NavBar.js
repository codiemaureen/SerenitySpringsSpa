import '../style/navBar.css'
import Button from './Button';
import { BsBag } from "react-icons/bs";
import { BsFillSearchHeartFill } from "react-icons/bs";


const NavBar = () => {
 let navItems = ['home', 'about', 'services', 'lookbook', 'news',  <Button title={'search'} icon={<BsFillSearchHeartFill />}/>, <Button title={'cart'} icon={<BsBag color='white'/>} /> , 'Book Online']
  return (
   <div id='navBar'>
   <nav>
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
