import "./contact.scss"
import { useState } from "react";

export default function Contact() {

    // used to show a message after submitting the contact form
    const [message,setMessage] = useState(false)



    // Used to prevent the page from refreshing when the form button is clicked. Becuase the refresh takes you to a different page.
    const handleSubmit = (e)=>{
        e.preventDefault();

        // set message visibility to true, when the form is submitted
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/website_shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you! I will reply soon :)</span>}
                </form>
            </div>
        </div>
    )
}
