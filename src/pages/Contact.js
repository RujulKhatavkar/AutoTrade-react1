import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40uequp",
        "template_k9jiipq",
        form.current,
        "usd1imNCiKJHBFI8w"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="page-color">
    <div className="aligns">
      <form className="form"ref={form} onSubmit={sendEmail}>
       <p class="heading">Contact Us</p>

        <input type="text" name="user_name"class="input" placeholder="Name" />
        <label>Email</label>
        <input type="email" name="user_email"class="input" placeholder="Email" />
        <label>Message</label>
        <textarea class="input" name="message" placeholder="Write Your message here"/>
        <input className="btn"type="submit" value="Send" />
      </form></div></div>

  );
};

export default Contact;
