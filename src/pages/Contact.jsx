import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nnj9ch7", "template_jtypw3a", form.current, {
        publicKey: "IikkbZH1EQSF81C9e",
      })
      .then(
        () => {
          setMessage({
            text: "Your message has been sent successfully!",
            type: "success",
          });
          form.current.reset();
        },
        (error) => {
          setMessage({
            text: "Failed to send message. Please try again.",
            type: "error",
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Feel free to reach out for any inquiries, collaborations, or project
          discussions. I am always open to new opportunities and connections.
        </p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Ablekuma, Accra, Ghana</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Phone Number:</h3>
                <p>+233 20 810 2626</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email:</h3>
                <p>kvngalpha000@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            {message.text && (
              <div
                className={`alert ${
                  message.type === "success" ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message.text}
              </div>
            )}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="sender_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="sender_number"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    name="sender_email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
