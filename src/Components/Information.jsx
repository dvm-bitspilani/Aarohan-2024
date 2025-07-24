export default function Information({
  year = 2026,
  dates = ["2nd November, 2025: 9am-12pm", "9th November, 2025: 9am-12pm"],
  lastDate = "31st October, 2025",
}) {
  return (
    <div className="information">
      <p>Dates for Aarohan {year}:</p>
      <p>
        <ul>
          {dates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
      </p>
      <p>
        Please register atleast 5 days before an attempt to be eligible for the
        exam. The last date for registration is the {lastDate}.
      </p>
      <p>
        Please note that you will have to attempt ONLY ONE of the three
        attempts. You will NOT be allowed to give the exam more than once.
      </p>
      <p>Best of Luck and Be Curious!</p>
    </div>
  );
}
