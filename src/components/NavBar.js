import '../style/navBar.css'
import { BsBag } from "react-icons/bs";
import { BsFillSearchHeartFill } from "react-icons/bs";


const NavBar = () => {
 let navItems = ['home', 'about', 'services', 'lookbook', 'news', <BsFillSearchHeartFill color='white'/>, <BsBag color='white'/> , 'Book Online']
  return (
   <>
   <nav>
   {navItems.map((items) => (
    <ol>
     <li>{items}</li>
    </ol>
   ))}
   </nav>

   </>
  )
}

export default NavBar
