import "../style/contact.css"

const Contact = () => {
  return (
    <div className="contactForm">
      <section >
      <h2>Contact Form</h2>
       <form>
        <div className="input-box">
         <label>Name</label>
         <input type="text" className="field" placeholder="Enter your name"></input>
        </div>
        <div className="input-box">
         <label>Email Address</label>
         <input type="email" className="field"  placeholder="Enter your email"></input>
        </div>
        <div className="input-box">
         <label>Message</label>
         <textarea type="text" className="field mess" placeholder="Enter your message"></textarea>
        </div>
       </form>
      </section>
    </div>
  )
}

export default Contact
