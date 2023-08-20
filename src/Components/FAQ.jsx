import React from "react";
import "../Styles/FAQ.css"
import FAQbox from "./FAQbox";

export default function FAQ(){

    const data = [
        {
            question: "Who all are eligible for the exam?",
            answer: "Students of classes 9-10 and 11-12(Science with Mathematics), studying in school affiliated with any board are eligible to appear in the exam."
        },
        {
            question: "How will the exam be conducted?",
            answer: "The exam will be conducted in Online Mode. All the registered students will be getting their login credentials and Admit cards with the link for the online examination porta"
        },
        {
            question: "What is the exam pattern?",
            answer: "The exam focuses on enriching the application skill-set of the students, rather than testing the memory. A set of passages with a unifying scientific phenomenon is provided, based on which MCQs are given. For sample papers, click on the link "
        },
        {
            question: "How credible is the paper, since it's designed by a student body?",
            answer: "The paper made by the organizing committee would be proof-read by a panel of Professors and the credibility of the paper is unquestionable. "
        },
        {
            question: "What would the students gain?",
            answer: "The paper aims to inculcate scientific temperament and evoke the curiosity of a student. It requires no preparation and is completely IQ based. Regional winners get loads of goodies among other benefits and the national winners get to visit BITS Pilani during APOGEE-our international annual technical festival, with all events expenses taken care of. "
        },
        {
            question: "What is the registration process?",
            answer: "The students are required to register themselves on our website. If a school wants to register their students, they can reach out to us for registering the students on the behalf of the school. "
        },
        {
            question: "What is the exam/registration fee?",
            answer: "The exam fee is Rs 150 per student, to be paid online on our website. "
        },
        {
            question: "How is this different from other Olympiads? ",
            answer: "The examination, unlike many others, doesn't stress on solving more problems in less time, but focuses more on helping increase the intellect and the problem-solving ability of the student. "
        },
        // {
        //     question: "",
        //     answer: ""
        // },
    ]

    const FAQs = data.map((data, index) => {
        return(
            <FAQbox
            question = {data.question}
            answer = {data.answer}
            index = {data.question}
        />
        )
    })

    return(
        <>
            <div className="FAQ">
                <div className="heading" style={{ width: "100%", textAlign: "center" }}>Frequently Asked Questions</div>
                {FAQs}
            </div>
        </>
    )
}