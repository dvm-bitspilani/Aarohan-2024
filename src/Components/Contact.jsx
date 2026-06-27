import axios from "axios";
import { useState } from "react";
import "../Styles/Contact.css";
import { BASE_URL } from "../Utils/apis";
import Modal from "./Modal";
import Profile from "./Profile";

import Yuva from "../Contact/yuva.png"
import Prisha from "../Contact/prisha_singhal.png"
import Tanvi from "../Contact/tanvi.png"
import Adarsh from "../Contact/adarsh.png"
import Aarnav from "../Contact/aarnav.png"
import Trishaa from "../Contact/trishaa.png"

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
      const response = await axios.post(`${BASE_URL}/ask_query/`, formData);
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
      <div className="heading" style={{ width: "100%", textAlign: "center", color:"white" }}>
        Contact Us
      </div>
      <div className="contact">{Contact}</div>
      <div className="query">
        <div className="q-form">
          <div
            className="heading query-heading"
            tyle={{ width: "100%", textAlign: "center" }}
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
