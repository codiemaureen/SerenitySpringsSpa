import '../style/navBar.css'


const NavBar = () => {
 let navItems = ['home', 'about', 'services', 'lookbook', 'news', 'searchIcon', 'cartIcon', 'Book Online']
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
