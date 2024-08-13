const NavBar = () => {
  const navItems = ["Home", "Services", "Schedule Appointment", "Contact Us"];

  const id = (Math.floor(Math.random * 10000) + 1)
  return (
    <div className="navBar">
      {navItems.map((item) => (
       <ul>
        <li className="navItems" key={id}>{item}</li>
       </ul>
      ))}
    </div>
  )
}

export default NavBar
