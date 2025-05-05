import "../style/button.css";

const Button = ({ icon, title }) => {

  return (
   <>
    <a href={`/${title}`} target="_blank">
     <button type="submit" className="btn">{icon}{title}</button>
    </a>
   </>
  )
}

export default Button
