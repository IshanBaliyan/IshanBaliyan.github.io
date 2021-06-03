import "./topbar.scss";

import {LinkedIn, GitHub, ListAlt} from '@material-ui/icons';

//import { Document } from 'react-pdf';

// import ReactPDF from '@react-pdf/renderer';

// import MyDocument from "./myDocument/MyDocument.js";

// do devpost
// publications / blogs (don't recommend) / etc... / resume

// school (although you should use that one elsewhere)
// TODO Add devpost later
// TODO Add University of Waterloo Later ("School")

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ishan Baliyan</a>
                    <div className="itemContainer">
                        <a href={"https://www.linkedin.com/in/ishan-baliyan"} className="social"><LinkedIn className="linkedinIcon"/></a>
                        <a href={"https://www.linkedin.com/in/ishan-baliyan"} className="social">LinkedIn</a>
                    </div>
                    <div className="itemContainer">
                        <a href={"https://github.com/IshanBaliyan"} className="social"><GitHub className="githubIcon"/></a>
                        <a href={"https://github.com/IshanBaliyan"} className="social">GitHub</a>
                    </div>
                    <div className="itemContainer">
                        <ListAlt className="githubIcon"/>
                        
                        
                        {/* ReactPDF.render(<MyDocument />, "official_full_ishan_baliyan_website\Official_Reviewed_Resume_Waterloo_June_2021.pdf"); */}
                        
                        {/* <Link href={require("./myDocument/Official_Reviewed_Resume_Waterloo_June_2021.pdf")} target="blank">Resume</Link> */}
                        <a href="./myDocument/Official_Reviewed_Resume_Waterloo_June_2021.pdf" download>Resume</a>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}
