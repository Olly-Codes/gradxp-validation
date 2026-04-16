import { Link } from "react-router-dom"
import heroImg from "../assets/18771_transparent.png"
import logo from "../assets/logo.png"

function Landing() {

  return (
    <>
      <div className="container container-landing">
        <img className="logo" width={200} height={200} src={logo} alt="" />
        <div className="blob-blue"></div>
        <div className="blob-yellow"></div>
        <div className="content-wrapper">
          <h1 className="title title-landing">Agile Execution. <br /> Elite Emerging Talent.</h1>
          <p className="subtitle subtitle-landing">A premium marketplace connecting innovative South African enterprises with specialized, top-tier university talent for milestone-driven projects.</p>
          <div className="btn-group">
            <Link to={"/smmeForm"}>
                <button className="btn-smme">Commision a Project</button>
            </Link>
            <Link to={"/studentForm"}>
                  <button className="btn-student">Join the Talent Network</button>
            </Link>
          </div>
        </div>
        <div className="img-wrapper">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Landing