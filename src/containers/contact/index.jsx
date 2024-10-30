import React, { useRef, useState } from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaEnvelope } from 'react-icons/fa';
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import loadingAnimation from '../../components/preLoader/lottieAnimation.json';
import Lottie from 'lottie-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // State for status message
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility


  // Toast Notification
  const handleMessageSent = () => {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,  // close after 3 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    });
  };


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
        headerText="Contact Me"
        icon={<FaEnvelope size={40} />}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
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
                    type="text"
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
              <button  type="submit" value="Send" onClick={handleMessageSent}>Submit</button>
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
