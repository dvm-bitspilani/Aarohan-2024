import React, { useState } from "react";
import Profile from "./Profile";
import "../Styles/Contact.css";
import Aman from '../Contact/aman_sharma.jpg'
import Anirvan from '../Contact/anirvan_kanavi.jpg'
import Bhoomi from '../Contact/bhoomi_motihar.jpg'
import Maanas from '../Contact/maanas_popuri.jpg'
import Varenyam from '../Contact/varenyam_bharti.jpg'
import Modal from "./Modal";
import axios from "axios";

export default function Contact() {
  const data2 = [
    {
      image: `${Maanas}`,
      name: "Maanas Popuri",
      caption: "Coordinator",
      phone: "+91 9886060434",
    },
    {
      image: `${Bhoomi}`,
      name: "Bhoomi Motihar",
      caption: "Joint-Coordinator and Minifest Head",
      phone: "+91 9664390939",
    },
    {
      image: `${Aman}`,
      name: "Aman Sharma",
      caption: "Kowledge Team Head",
      phone: "+91 8630314103",
    },
    {
      image: `${Varenyam}`,
      name: "Varenyam Bharti",
      caption: "Sponsorship Head",
      phone: "+91 6289735341",
    },
    {
      image: `${Anirvan}`,
      name: "Anirvan Kanavi",
      caption: "Joint-Coordinator",
      phone: "+91 9136072921",
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
        "https://aarohan.bits-apogee.org/aarohan/ask_query/",
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
