import { useState } from "react";
import { submitForm } from "../services/submitForm";
import { useNavigate } from "react-router-dom";

function SMMEForm() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let role = "smme";
        const result = await submitForm({
            role: role,
            name,
            budget,
            contact,
            message
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
            <h1 className="title form-title">Tell us what you need</h1>
            <p className="subtitle">Get affordable help from students on real projects</p>
        </div>
        <input
            type="text"
            placeholder="Business Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        
        <input
            type="tel"
            placeholder="Contact (Phone)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required />

        <input
            type="number"
            placeholder="Project Budget"
            inputMode="decimal"
            step="0.01"
            min="0"
            value={budget}
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            required />
        
        <textarea
            placeholder="Brief explanation of implementation required"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required />

            <button className="btn btn-smme" type="submit">Submit Project Brief</button>
      </form>
    </div>
    </>
  )
}

export default SMMEForm