import { useLocation } from "react-router-dom"
import tick from "../assets/check.png"

function Success() {

  const location = useLocation();
  const role = location.state?.role;
  let title;
  let message;

  if (role === "student") {
    title = "Application Received";
    message = "Your profile has been added to our pending talent pool. You will be notified via WhatsApp when a project matching your specialization becomes available";
  } else if (role === "smme") {
    title = "Project Brief Received";
    message = "Our team is currently reviewing your requirements and will contact you shortly to align you with the appropriate talent";
  } else {
    title = "Success";
    message = "Submission Recieved";
  }

  return (
    <>
      <div className="container container-success">
        <div className="blob-blue"></div>
        <div className="blob-yellow"></div>
        <div className="form-card">
          <div className="success-wrapper">
            <img className="check" width={80} height={80} src={tick} alt="A tick that shows a successful submission" />
          </div>
          <h1 className="success-title">{title}</h1>
          <p className="success-message">{message}</p>
        </div>
      </div>
    </>
  )
}

export default Success