import { Link } from "react-router-dom";

export default function Patients ({patients}) {
  return (
      <div className="patients bg-gray-100 w-100">
        {patients.map((name, num_past_reports, last_report_date, public_key) => (
          <SinglePatientBlock name={name} num_past_reports={num_past_reports} last_report_date={last_report_date} public_key={public_key} />
        ))}
      </div>
  )
}

function SinglePatientBlock ({ name, num_past_reports, last_report_date, public_key}) {
  return (
    <div className='single-patient-block'>
    </div>
  )
}
