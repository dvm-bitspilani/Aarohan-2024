import React, { useState } from "react";
import Profile from "./Profile";
import "../Styles/Contact.css"
import Vishwam from "../Contact/Vishwam.jpg"
import Nachiket from "../Contact/Nachiket.jpg"
import Anurag from "../Contact/Anurag.jpg"
import Rajul from "../Contact/Rajul.jpg"
import Saumya from "../Contact/Saumya.jpg"
import Shruti from "../Contact/Shruti.jpg"

export default function Contact() {
    const data2 = [
        {
            image: `${Vishwam}`,
            name: "Vishwam Bagrodia",
            caption: "Coordinator",
            phone: "+91 8240563699 "

        },
        {
            image: `${Nachiket}`,
            name: "Nachiketh Shastry",
            caption: "Joint Coordinator and Head of Knowledge",
            phone: "+91 7483945690 "

        },
        {
            image: `${Anurag}`,
            name: "Anurag Singh Bisht",
            caption: "Joint Coordinator and Head of Sponsorship",
            phone: "+91 8602452639 "

        },
        {
            image: `${Rajul}`,
            name: "Rajul Bangani",
            caption: "Head of Minifest and Outreach",
            phone: "+91 8722714214 "

        },
        {
            image: `${Saumya}`,
            name: "Saumya Ojha",
            caption: "Head of Event Management",
            phone: "+91 9219555290 "

        },
        {
            image: `${Shruti}`,
            name: "Shruti Chaturvedi",
            caption: "Head of Graphic Design and Publicity",
            phone: "+91 8851336713"

        },
    ]

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    console.log(name, email, phone, message)

    const Contact = data2.map((data, index) => {
        return (
            <Profile
                key={data.name}
                image={data.image}
                name={data.name}
                caption={data.caption}
                phone={data.phone}
            />
        )
    })

    return (
        <>
            <div className="heading" style={{ width: "100%", textAlign: "center" }}>Contact Us</div>
            <div className="contact">
                {Contact}
            </div>
            <div className="query">
                <div className="q-form">
                    <div className="heading" style={{ width: "100%", textAlign: "center" }}>Submit Query</div>
                    <label htmlFor="">Full Name</label>
                    <input type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="Enter Full Name"
                        className="input-box"/>
                    <label htmlFor="">Email ID</label>
                    <input type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Enter Email ID"
                        className="input-box"/>
                    <label htmlFor="">Phone Number</label>
                    <input type="text"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        placeholder="Enter Phone Number"
                        className="input-box"/>
                    <label htmlFor="">Message</label>
                    <textarea id="" rows="10"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        placeholder="Enter Message"
                        ></textarea>
                    <div className="q-form-submit">
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}