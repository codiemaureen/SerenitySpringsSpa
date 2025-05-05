import '../style/navBar.css'
import Button from './Button';
import { BsBag } from "react-icons/bs";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  let navItems = [
    {title:'home', link: '/'}, 
    {title:'about', link:"#aboutContainer" } , 
    {title: 'services', link: "#servicesContainer" }, 
    {title: <Button icon={<BsBag color="white" />} />, link: null },
    {title: 'book online', link: null }
  ]
  return (
   <div id='navBarContainer'>
    <div className='titleDropdown'>
      <p className='headerTitle'><a href=''>Serenity Springs Spa</a></p>
      <button className='menuButton' onClick={() => setIsDropdownOpen((prev) => !prev)}><FaBars/></button>
    </div>

    {isDropdownOpen &&
      <nav className='navBar'>
        {navItems.map((items, i) => (
        
        <ol>
          <li><a href={items.link}>{items.title}</a></li>
        </ol>
      ))}
      </nav>}
   </div>
  )
}

export default NavBar
