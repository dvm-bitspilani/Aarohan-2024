import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Styles/Registration.css"
import Navbar from "../Components/Navbar";
import 'react-tabs/style/react-tabs.css';
import Form1 from "../Components/Form1";
import BackgroundImg from "../images/bg.png"
import Form2 from "../Components/Form2";


export default function Registration() {
    return (
        <>
            <Navbar />
            <div className="page" style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="heading" style={{ width: "100%", textAlign: "center", paddingTop: "2rem" }}>Registration Form</div>
                <Tabs className="reg-tab">
                    <TabList>
                        <Tab>Register as Student</Tab>
                        <Tab>Register as School</Tab>
                    </TabList>
                    <TabPanel>
                             <Form1 />
                    </TabPanel>
                    <TabPanel>
                        <Form2 />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}