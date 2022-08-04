import React from 'react'
import "../CSS/Style.css";
const Contact = () => {
  return (
    <>
    <section className="contact" id="contact-bg-imag">
        
    <div className="content">
        <h2>Contact Us</h2>
        <p>If you have any questions,issues.We're here to help.Check here to find the answers to your questions here and get in touch with us if you need to.</p>
    </div>
    <div className="container">
        <div className="contactinfo">


            <div className="box">
                <div className="icon">
                <span class="material-symbols-outlined text-dark h1" >
location_on
</span>
                </div>
                <div className="text">
                    <h3>Address</h3>
                    <p>123 Karelibaugh,Sama road,Vadodara,Gujarat,382041</p>
                </div>

            </div>

            <div className="box">
                <div className="icon"><span class="material-symbols-outlined text-dark h1">
call
</span>
                </div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>999-874-6560</p>
                </div>

            </div>

            <div className="box">
                <div className="icon"><span class="material-symbols-outlined text-dark h1">
mail
</span>
                </div>
                <div className="text">
                    <h3>Email</h3>
                    <p>barotpratham30@gmail.com</p>
                </div>

            </div>

        </div>

        <div className="contactform">
      <form>
            <h2>Send Message</h2>
            <div className="inputbox">
                <input type="text" name="name" required />
                <span>Full Name</span>
            </div>
            <div className="inputbox">
                <input type="text" name="email" required />
                <span>Email</span>
            </div>
            <div className="inputbox">
                <textarea  name="msg"  required></textarea>
                <span>Type Your Message...</span>
            </div>
            <div className="inputbox">
                <input   type="submit" />
            </div>
        </form>
        </div>
    </div>
</section>
</>
  )
}

export default Contact
