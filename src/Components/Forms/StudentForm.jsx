import { useFormik } from "formik"
import TextInput from "./Inputs/TextInput"

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
            studying_in_class: null,
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
            {children}
        </form>
    )
}