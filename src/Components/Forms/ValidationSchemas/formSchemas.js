import * as Yup from 'yup';

export const studentFormSchema = Yup.object({
    full_name: Yup.string().required("All fields are required"),
    fathers_name: Yup.string().required("All fields are required"),
    school_name: Yup.string().required("All fields are required"),
    city: Yup.string().required("All fields are required"),
    state: Yup.string().required("All fields are required"),
    studying_in_class: Yup.string().required("All fields are required").oneOf(["9", "10", "11", "12"], "Class has an invalid input"),
    contact_no: Yup.string().matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g, 'Please enter a valid phone number').required('All fields are required'),
    email_id: Yup.string().email("Email is invalid").required("All fields are required")
})