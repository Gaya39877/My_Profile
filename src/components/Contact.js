import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";
import contactImg from "../assets/img/6921099.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uv3ljek",
        "template_sa4ni4h",
        form.current,
        "mAS657z03HfSEzdO_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactSection>
<div className="row  "> 
  <div className="col-12 col-md-6 ">
        <h2 className="title-end"> Stay on Alert...</h2>
        <StyledContactImage src={contactImg} alt="Contact" className="mx-auto d-block" />
      </div>
      <div className="col-12 col-md-6">
        <StyledContactForm className="mx-auto d-block">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
      </div></div>
     
    </StyledContactSection>
  );
};
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledContactSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    flex: 1;
  }
`;

const StyledContactImage = styled.img`
  width: 400px;
  height: auto;
  // margin-left: 150px;
  align-items: center;
  animation: ${fadeIn} 5s ease-in-out infinite; 
`;
const StyledContactForm = styled.div`
  width: 350px;
  padding:20px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid purple;

      &:focus {
        border: 2px solid purple;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid purple;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background:purple;
      color: white;
      border: none;
    }
  }
`;

export default Contact;

