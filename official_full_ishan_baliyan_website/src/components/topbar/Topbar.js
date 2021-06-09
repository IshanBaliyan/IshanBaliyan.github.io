import "./topbar.scss";

import {LinkedIn, GitHub, ListAlt} from '@material-ui/icons';

//import { Document } from 'react-pdf';

// import ReactPDF from '@react-pdf/renderer';

// import MyDocument from "./myDocument/MyDocument.js";

// do devpost
// publications / blogs (don't recommend) / etc... / resume

// school (although you should use that one elsewhere)

import Pdf from "./res/Official_Reviewed_Resume_Waterloo_June_2021.pdf";

// TODO Add devpost later
// TODO Add University of Waterloo Later ("School")

// taking setMenuOpen and menuOpen as props from App.js
// you use setMenuOpen as a function, and use menuOpen as a variable
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        // if the menu is open (menuOpen is true), add active to the line, therefore, actively showing the menu
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ishan Baliyan</a>
                    <div className="itemContainer">
                        <a href={"https://www.linkedin.com/in/ishan-baliyan"} rel="noreferrer" target="_blank" className="social"><LinkedIn className="linkedinIcon"/></a>
                        <a href={"https://www.linkedin.com/in/ishan-baliyan"} rel="noreferrer" target="_blank" className="social"><div className="notForMobileText">LinkedIn</div></a>
                    </div>
                    <div className="itemContainer">
                        <a href={"https://github.com/IshanBaliyan"} rel="noreferrer" target="_blank" rel="noreferrer" className="social"><GitHub className="githubIcon"/></a>
                        <a href={"https://github.com/IshanBaliyan"} rel="noreferrer" target="_blank" rel="noreferrer" className="social"><div className="notForMobileText">GitHub</div></a>
                    </div>
                    <div className="itemContainer">
                        <a href={Pdf} className="social" download><ListAlt className="resumeIcon"/></a>
                        <a href={Pdf} className="social" download><div className="notForMobileText">Resume</div></a>
                    </div>
                </div>
                <div className="right">
                    {/* if they click the three lines, switch the menu from open to close or close to open, i.e. the opposite of the current state */} 
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
