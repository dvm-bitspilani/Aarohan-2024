import "../Styles/Form.css";
import { DATES, LAST_DATE } from "../Utils/formInformation";
import SchoolForm from "./Forms/SchoolForm";
import Information from "./Information";

export default function Form1() {
  return (
    <>
      <SchoolForm closed={false}>
        <Information year={2026} dates={DATES} lastDate={LAST_DATE} />
      </SchoolForm>
    </>
  );
}
