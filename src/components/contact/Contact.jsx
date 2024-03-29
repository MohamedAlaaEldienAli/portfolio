import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h2 className="title">
        <span className="icon-envelope1" />
        Contact us
      </h2>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new
      </p>
      <div className="flex">
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
        <div className="animation border">animation</div>
      </div>
    </section>
  );
};

export default Contact;
