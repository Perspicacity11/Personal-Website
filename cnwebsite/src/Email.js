import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit "Send"

    emailjs
      .sendForm(
        "service_rxypecv",
        "template_bchimns",
        form.current,
        "EHNfwt6PUo8janWQg"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
  };

  return (
    <div class="container">
      <h2>GET IN TOUCH</h2>
      <p class="section-subtitle"></p>
      <div class="row">
        <form>
          <div class="col-md-4">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name"
              required
            ></input>
          </div>
          <div class="col-md-4">
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div class="col-md-4">
            <input
              class="form-control"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            ></input>
          </div>
          <div class="col-sm-12">
            <textarea
              class="form-control"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div class="col-sm-12">
            <input
              type="submit"
              name="send"
              value="Send message"
              class="btn btn-inverted"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailContactForm;
