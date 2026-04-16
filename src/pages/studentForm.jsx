import { useState } from "react";
import { submitForm } from "../services/submitForm";
import { useNavigate } from "react-router-dom";

function StudentForm() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [institution, setInstitution] = useState("");
    const [program, setProgram] = useState("");
    const [specilization, setSpecilization] = useState("Accounting / Finance");
    const [message, setMessage] = useState("");
    const [otherValue, setOtherValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let role = "student";
        const result = await submitForm({
            role: role,
            name,
            institution,
            program,
            specilization,
            contact,
            message,
            otherValue
        });

        if (result.success) {
            navigate("/success", {state: {role: role}});
        } else {
            console.log("Something went wrong!", result.err);
        }
    }

  return (
    <>
    <div className="container">
        <div className="blob-blue"></div>
        <div className="blob-yellow"></div>
        <form className="form-card" onSubmit={handleSubmit}>
        <div className="heading-wrapper">
            <h1 className="title form-title">Tell us about yourself</h1>
            <p className="subtitle">Contribute your talents to real projects</p>
        </div>
        <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        
        <input
            type="text"
            placeholder="Institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required />
        
        <input
            type="text"
            placeholder="Degree Program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required />
        
        <select
            value={specilization}
            onChange={(e) => setSpecilization(e.target.value)}>
                <option value="Accounting / Finance">Accounting / Finance</option>
                <option value="Business / Management">Business / Management</option>
                <option value="Marketing / Communications">Marketing / Communications</option>
                <option value="Information Technology / Computer Science">Information Technology / Computer Science</option>
                <option value="Data / Analytics">Data / Analytics</option>
                <option value="Design / Creative Media">Design / Creative Media</option>
                <option value="Engineering">Engineering</option>
                <option value="Education / Training">Education / Training</option>
                <option value="Law / Legal Studies">Law / Legal Studies</option>
                <option value="Human Resources / People Operations">People / Operations</option>
                <option value="Supply Chain / Logistics">Supply Chain / Logistics</option>
                <option value="Administraion / Operations">Administration / Operations</option>
                <option value="Research / Writing">Research / Writing</option>
                <option value="Health / Writing">Health / Writing</option>
                <option value="Other">Other</option>
        </select>

        {specilization === "Other" && (
            <input 
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder="Enter your specilization"
                required />
        )}
        
        <input
            type="text"
            placeholder="Contact (Phone)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required />
        
        <textarea
            placeholder="What kind of opportunities are you looking for?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required />

            <button className="btn btn-student" type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default StudentForm