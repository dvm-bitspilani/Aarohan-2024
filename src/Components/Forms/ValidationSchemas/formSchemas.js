import * as Yup from 'yup';

export const studentFormSchema = Yup.object({
    full_name: Yup.string().required("All fields are required"),
    fathers_name: Yup.string().required("All fields are required"),
    school_name: Yup.string().required("All fields are required"),
    city: Yup.string().required("All fields are required"),
    state: Yup.string().required("All fields are required"),
    studying_in_class: Yup.string().required("All fields are required").oneOf(["9", "10", "11", "12"], "Class has an invalid input"),
    contact_no: Yup.string().matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g, 'Please enter a valid phone number').required('All fields are required'),
    email_id: Yup.string().email("Email is invalid").required("All fields are required"),
    
})

export const schoolFormSchema = Yup.object({
    school_name: Yup.string().required("All fields are required"),
    school_poc_name: Yup.string().required("All fields are required"),
    city: Yup.string().required("All fields are required"),
    state: Yup.string().required("All fields are required"),
    ninth_class_students: Yup.string().matches(/^\d+$/g, "Number of students has to be 0 or positive"),
    tenth_class_students: Yup.string().matches(/^\d+$/g, "Number of students has to be 0 or positive"),
    eleventh_class_students: Yup.string().matches(/^\d+$/g, "Number of students has to be 0 or positive"),
    twelfth_class_students: Yup.string().matches(/^\d+$/g, "Number of students has to be 0 or positive"),
    contact_no: Yup.string().matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g, 'Please enter a valid phone number').required('All fields are required'),
    email_id: Yup.string().email("Email is invalid").required("All fields are required"),
    file: Yup.mixed()
  .required("Please upload an Excel file")
  .test(
    "fileFormat",
    "Only .xls and .xlsx files are allowed",
    (value) => {
      if (!value) return false;

      return /\.(xls|xlsx)$/i.test(value.name);
    }
  ),
}).test('students-zero', "Total number of students cannot be 0",
    (values) => {
        const tempArr = [+values.ninth_class_students, +values.tenth_class_students, +values.eleventh_class_students, +values.twelfth_class_students]
        return tempArr.some(number => number !== 0)
    }
)