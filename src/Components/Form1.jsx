import "../Styles/Form.css";
import { DATES, LAST_DATE } from "../Utils/formInformation";
import StudentForm from "./Forms/StudentForm";
import Information from "./Information";

export default function Form1() {
  return (
    
    <StudentForm closed={false}>
      <Information year={2026} dates={DATES} lastDate={LAST_DATE} />
    </StudentForm>
  );
}
