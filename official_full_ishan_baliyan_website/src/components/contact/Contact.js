import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com"; // api used for sending the contact info to personal gmail account

export default function Contact() {

    // used to show a message after submitting the contact form
    const [message,setMessage] = useState(false)

    // Function sends email through Emailjs.com api for sending contact form info as an email to personal gmail account
    const handleSubmit = (e)=>{

        // Used to prevent the page from refreshing when the form button is clicked. Becuase the refresh takes you to a different page.
        e.preventDefault();

        // e.target is the contact info submitted through form (name, email, message)
        emailjs.sendForm('gmail', 'template_0v2o948', e.target, 'user_JlRPkG1Di64Y9nPd35cyg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        // set thank you message visibility to true, when the form is submitted
        setMessage(true)

        e.target.reset() // resets the contents of the form to be blank
    }

    // the "name" attribute in the <input>/<textarea> tags serves as the identifier with the emailjs.com api for sending the distinct info to personal gmail account
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/website_shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="text" placeholder="Name" name="name"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you! :)</span>}
                </form>
            </div>
        </div>
    )
}
