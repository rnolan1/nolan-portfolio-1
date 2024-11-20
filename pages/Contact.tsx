import Logo from '../assets/Nolan_Logo.svg'
import '../Contact.css';

function Contact() {
  return (
    <>
    <div className="Logo">
        <a href="app.tsx"><img src={Logo}/></a>
    </div>
    <div className="contact-form-container">
      <h1>DON'T BE SHY...</h1>
      <h2>say hello</h2>
      <form className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="form-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="form-input"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="form-input full-width"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="form-input full-width"
        />
        <textarea
          name="message"
          placeholder="Write your message here... *"
          className="form-textarea"
          required
        ></textarea>
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
    </div>
    </>  
  );
}
export default Contact;