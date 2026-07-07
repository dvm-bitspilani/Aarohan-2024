import { date } from "yup";
import { toWords } from "../Utils/apis";
import "../Styles/Information.css"

export default function Information({
  year = 2026,
  dates = [{
    date: "1st November, 2026",
    slots: ["9:00 a.m. - 11:00 a.m.", "3:00 p.m. - 5:00 p.m."]
  }, {
    date: "15th November, 2026",
    slots: ["9:00 a.m. - 11:00 a.m.", "3:00 p.m. - 5:00 p.m."]
  }],
  lastDate = "31st October, 2026",
}) {
  return (
    <div className="information" style={{marginTop:"1.5rem"}}>
      <p className="date-heading">Dates for Aarohan {year}:</p>
      <ul>
        {
          dates.map(date => 
            <div key={date.date} >
              <li className="date">{date.date}</li>
              <ul className="slots-list" >
                {date.slots.map((slot, i) => <li key={i}>Slot {i + 1}: {slot}</li>)}
              </ul>
            </div>
          )
        }
      </ul>
      <p>
        The last date for registration is the {lastDate}.
      </p>
      <p style={{paddingBottom:"1rem"}}>
        { /* Please note that you will have to attempt ONLY ONE of the{" "}
        {toWords.convert(dates.length, { currency: false }).toLowerCase()}{" "}
        attempt{dates.length > 1 && "s"}. */ } You will NOT be allowed to give the
        exam more than once.
      </p>
      <p>Best of Luck and Be Curious!</p>
    </div>
  );
}
