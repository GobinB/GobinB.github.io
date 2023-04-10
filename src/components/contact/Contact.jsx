import "./contact.css"
import Linkedin from "../../img/linkedin.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef()
    const [done, setdone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_1fpg2ur',
             'template_b7mss61',
              formRef.current,
               'D2cWV2tlAwMlXB0s-'
               )
            .then((result) => {
                console.log(result.text);
                setdone(true)
            },
             (error) => {
                console.log(error.text);
            });
    }




    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact Info
                    </h1>
                    <div className="c-info">
                    <a href="https://www.linkedin.com/in/gobinbastola/" target="_blank">
                        <div className="c-info-item">
                            <img src={Linkedin}
                                alt=""
                                href="https://www.linkedin.com"
                                className="c-icon"
                            />
                            linkedin.com/in/gobinbastola
                        </div>
                        </a>
                        <div className="c-info-item">
                        <a href = "mailto: bastolagobin@gmail.com"><img src={Email}
                                alt=""
                                className="c-icon"
                            />
                            bastolagobin@gmail.com</a>
                            
                        </div>
                        <div className="c-info-item">
                            <img src={Address}
                                alt=""
                                className="c-icon"
                            />
                            Somewhere in the mountains
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Submitted Successfully!"}

                    </form>
                </div>
            </div>

        </div>

    )
}

export default Contact 