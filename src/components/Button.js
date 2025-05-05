import "../style/button.css";

const Button = ({ icon, title }) => {

  return (

     <button type="submit" className="btn">{icon}{title}</button>

  )
}

export default Button
