import "./intro.scss"
import {ExpandMore} from '@material-ui/icons';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Ishan_Full_No_Background_(3).png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ishan Baliyan</h1>
                    <h3>I am a <span></span></h3>
                </div>
                <a href="#projects">
                    <ExpandMore />
                </a>
            </div>
        </div>
    )
}
