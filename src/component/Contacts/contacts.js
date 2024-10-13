import React, { useRef } from "react";
import facebook from "../../icons/facebook.png";
import insta from "../../icons/instagram.png";
import linkedin from "../../icons/linkedin.png";
import github from "../../icons/github.png";
import emailjs from "@emailjs/browser";
import "./contacts.css";
const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1xpgmwb", "template_it13ojj", form.current, {
        publicKey: "6yDSnPOvdS9wJzPfd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent !");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="ok">
        <h1 className="contactPageTitle">Contact Me </h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            required
            className="name"
            name="your_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            className="email"
            name="your_email"
            placeholder="Your email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="Send " className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href=" https://www.linkedin.com/in/vibhasaroha">
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
            <a href="https://github.com/vibhasaroha03">
              <img src={github} alt="github" className="link" />
            </a>
            <a href="https://www.facebook.com/vibha.chaudhary.374">
              <img src={facebook} alt="facebook" className="link" />{" "}
            </a>
            <a href="https://www.instagram.com/bethevibha ">
              <img src={insta} alt="insta" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contacts;
