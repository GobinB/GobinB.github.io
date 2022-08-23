import "./about.css"
import CFS from "../../img/cfs.png"
import APIA from "../../img/apia.png"
import WFS from "../../img/wfs.png"
import CCode from "../../img/CCode.png"


const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img src={CCode} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Academics & Awards</h1>
          <p className="a-sub">
            <b>University of Louisville</b>, Pursuing Bachelor of Science
            in Computer Science.
            <ul>
              <li><b>Cumulative GPA</b>: 3.7</li>
              <li><b>Relevant Coursework</b>: Data Structures, Object-Oriented Programming with Java, Python Programming, Software Enginnering (ongoing), Database (ongoing), Computer Systems and Organization (ongoing), Discrete Structures (ongoing) </li>
            </ul>
        </p>
        <p className="a-desc">
          <b>Scholarships</b>
          <ul>
              <li>Community Foundation of Louisville</li>
              <li>APIA Scholar</li>
              <li>Wells Fargo Student Impact Scholar</li>
            </ul>
        </p>
        <div className="a-award">
          <img src={CFS} alt="" className="a-award-img" />
          <img src={APIA} alt="" className="a-award-img" />
          <img src={WFS} alt="" className="a-award-img" />

        </div>
      </div>
    </div>
  )
}

export default About