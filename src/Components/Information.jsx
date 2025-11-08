import { date } from "yup";
import { toWords } from "../Utils/apis";

export default function Information({
  year = 2026,
  dates = [{
    date: "2nd November, 2025",
    slots: ["9:00 a.m. - 11:00 a.m.", "3:00 p.m. - 5:00 p.m."]
  }, {
    date: "9nd November, 2025",
    slots: ["9:00 a.m. - 11:00 a.m.", "3:00 p.m. - 5:00 p.m."]
  }, {
    date: "23rd November, 2025",
    slots: ["9:00 a.m. - 11:00 a.m.", "3:00 p.m. - 5:00 p.m."]
  }],
  lastDate = "20th November, 2025",
}) {
  return (
    <div className="information">
      <p>Dates for Aarohan {year}:</p>
      <ul>
        {
          dates.map(date => 
            <div key={date.date}>
              <li>{date.date}</li>
              <ul className="slots-list">
                {date.slots.map((slot, i) => <li key={i}>Slot {i + 1}: {slot}</li>)}
              </ul>
            </div>
          )
        }
      </ul>
      <p>
        The last date for registration is the {lastDate}.
      </p>
      <p>
        Please note that you will have to attempt ONLY ONE of the{" "}
        {toWords.convert(dates.length, { currency: false }).toLowerCase()}{" "}
        attempt{dates.length > 1 && "s"}. You will NOT be allowed to give the
        exam more than once.
      </p>
      <p>Best of Luck and Be Curious!</p>
    </div>
  );
}
