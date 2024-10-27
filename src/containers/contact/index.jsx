import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';
import  loadingAnimation from '../../components/preLoader/lottieAnimation.json';
import Lottie from 'lottie-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // State for status message
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7lp79wz",
      "template_kbxny1p",
      form.current, 
      {
        publicKey: "iSYvypEudpUbpiSOI",
      }
    )
    .then(
      () => {
        setStatus("Message sent successfully!"); // Set success message
        form.current.reset(); // Clear the form if needed
      },
      (error) => {
        setStatus(`Failed to send message: ${error.text}`); // Set error message
      }
    );

    // Show the status message
    setIsVisible(true);

    // Clear the status message after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      setStatus(""); // Clear status message
    }, 5000);
  };

  // Determine the class for the status message based on success or failure
  const statusClass = status.startsWith("Failed") ? "status-message fail" : "status-message";

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact__content__form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="from_name"
                    className="inputName"
                    type="text"
                  />
                  <label htmlFor="name" className="nameLabel">Name</label>
                </div>
                <div>
                  <input
                    required
                    name="from_email"
                    className="inputEmail"
                    type="email"
                  />
                  <label htmlFor="email" className="emailLabel">Email</label>
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    className="inputDescription"
                    rows="5"
                  />
                  <label htmlFor="description" className="descriptionLabel">Description</label>
                </div>
              </div>
              <button type="submit" value="Send">Submit</button>
            </form>
            {isVisible && <p className={statusClass}>{status}</p>} {/* Status message displayed here */}
          </div>

        </Animate>
          <Lottie animationData={loadingAnimation} loop={true} className="lottieAnimation" />
      </div>
    </section>
  );
};

export default Contact;
