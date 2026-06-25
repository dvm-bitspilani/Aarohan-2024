import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactCard from "./ContactCard";

import Yuva from "../Contact/yuva.png"
import Prisha from "../Contact/prisha_singhal.png"
import Tanvi from "../Contact/tanvi.png"
import Adarsh from "../Contact/adarsh.png"
import Aarnav from "../Contact/aarnav.png"
import Trishaa from "../Contact/trishaa.png"

gsap.registerPlugin(ScrollTrigger);

export default function Contacts() {
    const containerRef2 = useRef(null);

    
    return (
        <div ref={containerRef2}>
            <div className="contacts-heading">
                <h2>CONTACT US</h2>
            </div>

            <ContactCard
                image={Yuva}
                name="Yuva Chandrahaas Nandigam"
                position="Coordinator"
                phone={8277238174}
            />

            <ContactCard
                image={Prisha}
                name="Prisha Singhal"
                position="Joint Coordinator and Head of Minifest and Outreach"
                phone={9354003919}
            />

            <ContactCard
                image={Tanvi}
                name="Tanvi Kaushik"
                position="Joint Coordinator and Head of Design and Excursions"
                phone={9205980920}
            />

            <ContactCard
                image={Adarsh}
                name="Adarsh Kundu"
                position="Joint Head of Knowledge Team"
                phone={8128576996}
            />

            <ContactCard
                image={Aarnav}
                name="Aarnav Sood"
                position="Joint Head of Knowledge Team"
                phone={9930381911}
            />
            <ContactCard
                image={Trishaa}
                name="Trishaa Ganesh Pai Vernekar"
                position="Treasurer and Head of Sponsorships"
                phone={7499766877}
            />
        </div>
    );
}