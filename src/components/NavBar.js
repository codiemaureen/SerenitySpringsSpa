import '../style/navBar.css'
import Button from './Button';
import { BsBag } from "react-icons/bs";


const NavBar = () => {
  let navItems = [
    {title:'home', link: ''}, 
    {title:'about', link:"#aboutContainer" } , 
    {title: 'services', link: "#servicesContainer" }, 
    {title: <Button title="Cart" icon={<BsBag color="white" />} />, link: null },
    {title: 'book online', link: null }
  ]
  return (
   <div id='navBar'>
    <nav>
    <p className='headerTitle'><a href=''>Serenity Springs Spa</a></p>
    {navItems.map((items, i) => (
      
      <ol>
        <li><a href={items.link}>{items.title}</a></li>
      </ol>
    ))}
    </nav>
   </div>
  )
}

export default NavBar
