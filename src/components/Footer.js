import Contact from "./Contact"
import "../style/footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <Contact />
      <div className="iconCredit">
        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/22992/stones">Stones</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  )
}

export default Footer
