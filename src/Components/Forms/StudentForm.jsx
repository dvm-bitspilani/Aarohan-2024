import { useFormik } from "formik"
import TextInput from "./Inputs/TextInput"
import RadioGroup from "./Inputs/RadioGroup"
import CustomRadio from "./Inputs/Radio"

export default function StudentForm({ closed, children }) {
    if (closed) {
        return (
            <div className="information">
                <div className="regs_closed">Student Registrations are closed</div>
            </div>
        )
    }

    const { values, errors, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
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
            console.log(values)
        }
    })

    return (
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
            {children}
        </form>
    )
}