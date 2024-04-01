import "./contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/animations/contact.json";

const Contact = () => {
  return (
    <section className="contact-us" id="contact">
      <h2 className="title">
        <span className="icon-envelope1" />
        Contact us
      </h2>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new
      </p>
      <div className="flex" style={{justifyContent: "space-around"} }>
        <form action="" className="">
          <div className="flex" >
            <label htmlFor="email">Email Address</label>
            <input required type="email" id="email" />
          </div> 

          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="message">Your Message</label>
            <textarea name="" required id="message"></textarea>
          </div>

          <button type="submit" className='submit'>Submit</button>
        </form>
        <div className="animation" style={{width: "30%"}}><Lottie animationData={contactAnimation} loop={true} /></div>
      </div>
    </section>
  );
};

export default Contact;
