import "../Styles/Form.css";
import StudentForm from "./Forms/StudentForm";

export default function Form1() {
  return (
    <>
      <StudentForm closed={false}>
        <div className="information">
          <br />
          <br />
          <br />Dates for Aarohan 2025:
          <br />
          <br />20th October, 2024: 9am-12noon
          <br />10th November, 2024: 2pm-5pm
          <br />17th November, 2024: 2pm-5pm
          <br />
          <br />Please register atleast 5 days before an attempt to be eligible for the exam.
          The last date for registration is the 18th of October, 2024.
          <br />
          <br />Please note that you will have to attempt ONLY ONE of the three attempts. You will NOT be allowed to give the exam more than once.
          <br />
          <br />Best of Luck and Be Curious!
        </div>
      </StudentForm>
    </>
  );
}
