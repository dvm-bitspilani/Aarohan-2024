import { useFormik } from "formik";
import { useEffect, useState,useRef } from "react";

import { schoolFormSchema } from "./ValidationSchemas/formSchemas";

import { FaFileDownload } from "react-icons/fa";
import apiClient from "../../Utils/apiClient";
import Modal from "../Modal";
import LocationInput from "./Inputs/Location";
import TextInput from "./Inputs/TextInput";

export default function SchoolForm({ closed = false, children }) {
  if (closed) {
    return (
      <div className="information">
        <div className="regs_closed">Registrations are closed</div>
      </div>
    );
  }
   
  const [excelFile, setExcelFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const fileInputRef = useRef(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setIsLoading(false);
  };

  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
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
      email_id: "",
      file:null
    },
    onSubmit: (values, action) => {
      setIsLoading(true);
      console.log("submit");
      const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value);
    });

  apiClient
  .post("/school_student_upload/", formData)
        .then((response) => {
          if (response.data.message.startsWith("School registered.")) {
            apiClient
              .post(`/payment/`, {
                email_id: response.data.email_id,
                reg_type: response.data.reg_type,
              })
              .then((paymentResponse) => {
                window.document.write(paymentResponse.data);
                setIsLoading(false);
              })
              .catch((err) => {
                setShowModal(true);
                setErrorMessage("Payment Error");
                setIsLoading(false);
                console.log(err);
              });
          }
        })
        .catch((err) => {
          setShowModal(true);
          setErrorMessage(
            "An unexpected error occured, please try again later"
          );
          setIsLoading(false);
        });
    },
    validationSchema: schoolFormSchema,
    validateOnChange: false,
    validateOnBlur: false,
  });

  useEffect(() => {
    if (Object.values(errors).length >= 1) {
      setShowModal(true);
      setErrorMessage(Object.values(errors)[0]);
    }
  }, [errors]);

  useEffect(() => {

    const class9 = values.ninth_class_students;
    const class10 = values.tenth_class_students;
    const class11 = values.eleventh_class_students;
    const class12 = values.twelfth_class_students;
    setTotalAmount((+class9 + +class10 + +class11 + +class12) * 175);
  }, [
    values.ninth_class_students,
    values.tenth_class_students,
    values.eleventh_class_students,
    values.twelfth_class_students,
  ]);

  function handleCancel() {
    resetForm();
  }

  const downloadTemplate = async () => {
  try {
    const response = await apiClient.get("/school_student_template/", {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(response.data);

    const link = document.createElement("a");
    link.href = url;
    link.download = "School_Student_Template.xlsx";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (err) {
    setShowModal(true);
    setErrorMessage("Unable to download template.");
  }
};

  return (
    <>
      <Modal
        message={errorMessage}
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
      
      <form
        className="form"
        style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
        onSubmit={handleSubmit}
      >
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
        <LocationInput setFieldValue={setFieldValue} />
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
        <input
  ref={fileInputRef}
  type="file"
  accept=".xls,.xlsx"
  hidden
  onChange={(e) => {
    setFieldValue("file", e.target.files[0]);
  }}
/>
        <div className="submit-buttons">
          <button
           type="button"
           className="form-submit"
           onClick={downloadTemplate}
          >
           Download Excel Template
          </button>

<button
  type="button"
  className="form-submit"
  onClick={() => fileInputRef.current.click()}
  disabled={isLoading}
>
  {values.file ? "Uploaded": "Upload Excel"}

</button>
          <button
            className="form-cancel"
            onClick={handleCancel}
            disabled={isLoading}
          >
            CANCEL
          </button>
          <button className="form-submit" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "SUBMIT"}
          </button>
        </div>
        {children}
      </form>
    </>
  );
}
