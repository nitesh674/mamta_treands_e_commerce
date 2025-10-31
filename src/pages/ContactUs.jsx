import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../assets/css/style.css";

export default function ContactUs() {
  const formRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // ✅ prevent page reload

    const form = formRef.current;

    // ✅ Basic manual validation check
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !subject || !message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return; 
    }

    // ✅ Optional: Send email (you can uncomment later)
    emailjs.sendForm('service_yerw0te', 'template_79jz90y', formRef.current, 'DDNngNwIyVtcuz-dy')
      .then((result) => {
        console.log("Message sent", result.text);
        handleAlert(); // show alert only after success
        form.reset(); // clear form
      })
      .catch((error) => {
        console.error("Email send error:", error.text);
      });

    // ✅ For testing only (no emailjs)
    // console.log("Form submitted:", { name, email, subject, message });
    handleAlert(); // show success message
    form.reset(); // clear form after submit
  };

  return (
    <>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form ref={formRef} onSubmit={sendEmail}>
                  <fieldset>
                    <input type="text" placeholder="Enter your full name" name="name" required />
                    <input type="email" placeholder="Enter your email address" name="email" required />
                    <input type="text" placeholder="Enter subject" name="subject" required />
                    <textarea placeholder="Enter your message" required></textarea>

                    <button type="submit" className="submit-btn">
                      Submit
                    </button>

                    {showAlert && (
                      <div
                        className="alert alert-success animate__animated animate__fadeInRight"
                        role="alert"
                        style={{
                          position: "fixed",
                          bottom: "20px",
                          right: "20px",
                          zIndex: 1050,
                        }}
                      >
                        ✅ Message sent successfully!
                      </div>
                    )}
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
