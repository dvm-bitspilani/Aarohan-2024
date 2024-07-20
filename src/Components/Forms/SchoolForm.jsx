import { useEffect, useState } from "react"
import { useFormik } from "formik"
import axios from "axios"

import { schoolFormSchema } from "./ValidationSchemas/formSchemas"

import TextInput from "./Inputs/TextInput"
import LocationInput from "./Inputs/Location"
import Modal from "../Modal"

export default function SchoolForm({ closed = false, children }) {
    if (closed) {
        return (
            <div className="information">
                <div className="regs_closed">Registrations are closed</div>
            </div>
        )
    }

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [totalAmount, setTotalAmount] = useState(0);

    const handleCloseModal = () => {
        setShowModal(false);
        setIsLoading(false);
    };

    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue, resetForm } = useFormik({
        initialValues: {
            school_name: "",
            school_poc_name: "",
            city: "",
            state: "",
            ninth_class_students: "0",
            tenth_class_students: "0",
            eleventh_class_students: "0",
            twelfth_class_students: "0",
            contact_no: "",
            email_id: ""
        },
        onSubmit: (values, action) => {
            setIsLoading(true)
            console.log("submit")
            axios.post('https://bits-apogee.org/2025/main/aarohan/schoolreg/', values)
                .then(response => {
                    if (response.data.message === "School created.") {
                        axios.post("https://bits-apogee.org/2025/main/aarohan/payment/", {
                            email_id: response.data.email_id,
                            reg_type: response.data.reg_type
                        })
                            .then(paymentResponse => {
                                window.document.write(paymentResponse.data);
                                setIsLoading(false)
                            })
                            .catch(err => {
                                setShowModal(true);
                                setErrorMessage("Payment Error")
                                setIsLoading(false)
                                console.log(err)
                            })
                    }
                })
                .catch(err => {
                    setShowModal(true)
                    setErrorMessage("An unexpected error occured, please try again later")
                    setIsLoading(false)
                })
        },
        validationSchema: schoolFormSchema,
        validateOnChange: false,
        validateOnBlur: false,
    })

    useEffect(() => {
        if (Object.values(errors).length >= 1) {
            setShowModal(true)
            setErrorMessage(Object.values(errors)[0])
        }
    }, [errors])

    useEffect(() => {
        // console.log('effect')
        const class9 = values.ninth_class_students
        const class10 = values.tenth_class_students
        const class11 = values.eleventh_class_students
        const class12 = values.twelfth_class_students
        setTotalAmount((+class9 + +class10 + +class11 + +class12) * 175)
    }, [values.ninth_class_students, values.tenth_class_students, values.eleventh_class_students, values.twelfth_class_students])

    function handleCancel() {
        resetForm()
    }

    return (
        <>
            <Modal
                message={errorMessage}
                showModal={showModal}
                setShowModal={setShowModal}
                handleCloseModal={handleCloseModal}
            />
            <form className="form" onSubmit={handleSubmit}>
                <TextInput
                    name="school_name"
                    title="School Name"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    name="school_poc_name"
                    title="School POC Name"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <LocationInput
                    setFieldValue={setFieldValue}
                />
                <TextInput
                    name="contact_no"
                    title="Contact Number of In-Charge"
                    placeholder="Enter Contact Number"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    name="email_id"
                    title="Email ID"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <label>Class-wise split up of no of students: </label>
                <div className="split-up">
                    <div className="class">
                        <label htmlFor="">Class 09</label>
                        <input
                            type="number"
                            className="input-box"
                            placeholder="Enter Number"
                            value={values.ninth_class_students}
                            name="ninth_class_students"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 10</label>
                        <input
                            type="number"
                            className="input-box"
                            placeholder="Enter Number"
                            value={values.tenth_class_students}
                            name="tenth_class_students"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 11</label>
                        <input
                            type="number"
                            className="input-box"
                            placeholder="Enter Number"
                            value={values.eleventh_class_students}
                            name="eleventh_class_students"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="class">
                        <label htmlFor="">Class 12</label>
                        <input
                            type="number"
                            className="input-box"
                            placeholder="Enter Number"
                            value={values.twelfth_class_students}
                            name="twelfth_class_students"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <label>Total Amount to be paid</label>
                <input
                    type="text"
                    className="input-box"
                    placeholder="Total Amount will appear here"
                    value={totalAmount}
                    disabled={true}
                />

                <div className="submit-buttons">
                    <button
                        className="form-cancel"
                        onClick={handleCancel}
                        disabled={isLoading}
                    >
                        CANCEL
                    </button>
                    <button
                        className="form-submit"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "SUBMIT"}
                    </button>
                </div>
                {children}
            </form>
        </>
    )
}