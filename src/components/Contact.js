import "../style/contact.css"

const Contact = () => {
  return (
    <div className="contactForm">
      <section >
      <h2>Contact Form</h2>
       <form>
        <div className="input-box">
         <label>Name</label>
         <input type="text" placeholder="Enter your name"></input>
        </div>
       </form>
      </section>
    </div>
  )
}

export default Contact
