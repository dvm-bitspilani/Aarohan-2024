import { useState } from "react";
import "../Styles/Contact.css";
import apiClient from "../Utils/apiClient";
import Modal from "./Modal";
import Profile from "./Profile";

import Yuva from "../Contact/yuva.jpg"
import Prisha from "../Contact/prisha_singhal.jpg"
import Tanvi from "../Contact/tanvi.jpg"
import Adarsh from "../Contact/adarsh.jpg"
import Aarnav from "../Contact/aarnav.jpg"
import Trishaa from "../Contact/trishaa.jpg"

export default function Contact() {
  const data2 = [
    {
      image: `${Yuva}`,
      name: "Yuva Chandrahaas Nandigam",
      caption: "Coordinator",
      phone: "+91 8277238174",
    },
    {
      image: `${Prisha}`,
      name: "Prisha Singhal",
      caption: "Joint Coordinator and Head of Minifest and Outreach",
      phone: "+91 9354003919",
    },
    {
      image: `${Tanvi}`,
      name: "Tanvi Kaushik",
      caption: "Joint Coordinator and Head of Design and Excursions",
      phone: "+91 9205980920",
    },
    {
      image: `${Adarsh}`,
      name: "Adarsh Kundu",
      caption: "Joint Head of Knowledge Team",
      phone: "+91 8128576996",
    },
    {
      image: `${Aarnav}`,
      name: "Aarnav Sood",
      caption: "Joint Head of Knowledge Team",
      phone: "+91 9930381911",
    },
    {
      image: `${Trishaa}`,
      name: "Trishaa Ganesh Pai Vernekar",
      caption: "Treasurer and Head of Sponsorships",
      phone: "+91 7499766877",
    }
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let isValid = false;

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
      setShowModal(true);
      setErrorMessage("Please Enter All the details");
      return false;
    }
    e.preventDefault();
    try {
      const response = await apiClient.post(`/ask_query/`, formData);
      setShowModal(true);
      setErrorMessage("Query Submitted Successfuly!");
    } catch (error) {
      console.error("Error creating post:", error.response.data.message);
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
      <div className="heading contact-heading" style={{ width: "100%", textAlign: "center", color:"white" }}>
        <h2>CONTACT US</h2>
      </div>
      <div className="contact">{Contact}</div>
      <div className="query">
        <div className="q-form">
          <div
            className="query-heading"
            style={{ width: "100%", textAlign: "center" }}
          >
            <h2>SUBMIT QUERY</h2>
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
            rows="7"
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