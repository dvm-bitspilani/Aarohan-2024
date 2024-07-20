import { useFormik } from "formik"
import TextInput from "./Inputs/TextInput"
import RadioGroup from "./Inputs/RadioGroup"
import CustomRadio from "./Inputs/Radio"
import LocationInput from "./Inputs/Location"
import { studentFormSchema } from "./ValidationSchemas/formSchemas"
import { useEffect, useState } from "react"
import Modal from "../Modal"
import axios from "axios"

export default function StudentForm({ closed, children }) {
    if (closed) {
        return (
            <div className="information">
                <div className="regs_closed">Student Registrations are closed</div>
            </div>
        )
    }

    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleCloseModal = () => {
        setShowModal(false);
        setIsLoading(false);
    };

    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue, resetForm } = useFormik({
        initialValues: {
            full_name: "",
            fathers_name: "",
            school_name: "",
            city: "",
            state: "",
            studying_in_class: "",
            contact_no: "",
            email_id: ""
        },
        onSubmit: (values, action) => {
            setIsLoading(true)
            console.log(values)
            axios.post('https://bits-apogee.org/2025/main/aarohan/studentreg/', values)
                .then(response => {
                    if (response.data.message === "Student registered.") {
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
                                console.log(err)
                                setIsLoading(false)
                            })
                    }
                })
                .catch(err => {
                    setShowModal(true)
                    setErrorMessage("An unexpected error occured, please try again later")
                    setIsLoading(false)
                })
        },
        validationSchema: studentFormSchema,
        validateOnChange: false,
        validateOnBlur: false,
    })

    useEffect(() => {
        if (Object.values(errors).length >= 1) {
            setShowModal(true)
            setErrorMessage(Object.values(errors)[0])
        }
    }, [errors])

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
                    name="full_name"
                    title="Student Name"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    name="fathers_name"
                    title="Father (or Mother) Name"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    name="school_name"
                    title="School/Institute"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextInput
                    name="contact_no"
                    title="Phone Number"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <RadioGroup
                    title="Class: "
                >
                    <CustomRadio
                        name="studying_in_class"
                        value="9"
                        label="Class 9"
                        id="class9"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        formikValue={values.studying_in_class}
                    />
                    <CustomRadio
                        name="studying_in_class"
                        value="10"
                        label="Class 10"
                        id="class10"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        formikValue={values.studying_in_class}
                    />
                    <CustomRadio
                        name="studying_in_class"
                        value="11"
                        label="Class 11"
                        id="class11"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        formikValue={values.studying_in_class}
                    />
                    <CustomRadio
                        name="studying_in_class"
                        value="12"
                        label="Class 12"
                        id="class12"
                        onChange={handleChange}
                        setFieldValue={setFieldValue}
                        formikValue={values.studying_in_class}
                    />
                </RadioGroup>
                <LocationInput
                    setFieldValue={setFieldValue}
                />
                <TextInput
                    name="email_id"
                    title="Email ID"
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
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