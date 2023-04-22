import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Patients () {
  let patients = [{name: "Trevor Keith", num_past_reports: 0, last_report_date: "1/1/2000", public_key: "abc"}];
  return (
    <div className="patients bg-gray-100 w-{100rem}">
      <p>patient_block</p>
      {patients.map((name, num_past_reports, last_report_date, public_key) => (
        <SinglePatientBlock
          name={name}
          num_past_reports={num_past_reports}
          last_report_date={last_report_date}
          public_key={public_key}
        />
      ))}
    </div>
  );
}

function SinglePatientBlock ({ name, num_past_reports, last_report_date, public_key}) {
  return (
    <div className='single-patient-block box w-{95rem}'>
      <p>Patient Block</p>
    </div>
  )
}
