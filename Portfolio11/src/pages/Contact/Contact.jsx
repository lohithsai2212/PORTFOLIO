import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>lohithsai.mv01@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+91 78160 83389</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Bangalore, India</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form 
          className="contact-form" 
          action="https://formsubmit.co/lohithsai.mv01@gmail.com" 
          method="POST"
        >
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{display: 'none'}} />
          
          {/* Disable Captcha for a smoother experience */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success Page Redirection (Optional) */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thanks.html" /> */}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}


export default Contact;