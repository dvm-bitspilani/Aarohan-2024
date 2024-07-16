import React, { useState } from "react";
import Profile from "./Profile";
import "../Styles/Contact.css";
import Parth from '../Contact/parth_gokak.jpg'
import Aashna from '../Contact/aashna_ased.jpg'
import Arushi from '../Contact/arushi_pant.jpg'
import Yuvraj from '../Contact/yuvraj_jagtap.jpg'
import Anirudh from '../Contact/anirudh_ladha.jpg'
import Navya from '../Contact/navya_gupta.jpg'
import Modal from "./Modal";
import axios from "axios";

export default function Contact() {
  const data2 = [
    {
      image: `${Parth}`,
      name: "Parth Gokak",
      caption: "Coordinator",
      phone: "+91 9588654137 ",
    },
    {
      image: `${Aashna}`,
      name: "Aashna Ased",
      caption: "Joint Coordinator and Minifest Lead",
      phone: "+91 9980188179 ",
    },
    {
      image: `${Arushi}`,
      name: "Arushi Pant",
      caption: "Joint Coordinator and Graphic Designing Lead",
      phone: "+91 8569860911 ",
    },
    {
      image: `${Yuvraj}`,
      name: "Yuvvraj Jagtap",
      caption: "Knowledge Team Lead",
      phone: "+91 9130046886 ",
    },
    {
      image: `${Anirudh}`,
      name: "Anirudh Ladha",
      caption: "Sponsorship Team Lead",
      phone: "+91 9345280098 ",
    },
    {
      image: `${Navya}`,
      name: "Navya Gupta",
      caption: "Event Management Team Lead",
      phone: "+91 9599944206 ",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let isValid = false;

  // console.log(name, email, phone, message)

  const Contact = data2.map((data, index) => {
    return (
      <Profile
        key={data.name}
        image={data.image}
        name={data.name}
        caption={data.caption}
        phone={data.phone}
      />
    );
  });

  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const formData = {
    full_name: name,
    email_id: email,
    contact_no: phone,
    message: message,
  };

  name != "" && email != "" && phone != "" && message != ""
    ? (isValid = true)
    : "";

  const handleSubmit = async (e) => {
    if (!isValid) {
      e.preventDefault();
      // alert("Please enter all the details")
      setShowModal(true);
      setErrorMessage("Please Enter All the details");
      return false;
    }
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bits-apogee.org/2024/main/aarohan/ask_query/",
        formData,
      );
      // console.log("Post created:", response.data);
      setShowModal(true);
      setErrorMessage("Query Submitted Successfuly!");
    } catch (error) {
      console.error("Error creating post:", error.response.data.message);
      //   alert(error.response.data.message)
      setShowModal(true);
      setErrorMessage(error.response.data.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        message={errorMessage}
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
      <div className="heading" style={{ width: "100%", textAlign: "center" }}>
        Contact Us
      </div>
      <div className="contact">{Contact}</div>
      <div className="query">
        <div className="q-form">
          <div
            className="heading"
            style={{ width: "100%", textAlign: "center" }}
          >
            Submit Query
          </div>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Full Name"
            className="input-box"
          />
          <label htmlFor="">Email ID</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email ID"
            className="input-box"
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter Phone Number"
            className="input-box"
          />
          <label htmlFor="">Message</label>
          <textarea
            id=""
            rows="10"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter Message"
          ></textarea>
          <div className="q-form-submit">
            <button onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
}
