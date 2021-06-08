import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {

            // changing a few default values below. you can customize more features by searching library online
            showCursor: true, // shows the blinking typing cursor beside the text
            backDelay: 1500, // delay the typing for 1.5 seconds.
            backSpeed: 60, // type back speed in milliseconds (changed default value of 50ms)
            strings: ["Software Programmer", "Student at UWaterloo CS", "University Researcher", "former Project Consultant"]
        });
    },[])
        
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ishan_better_no_background.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ishan Baliyan</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#projects">
                    <img src="assets/arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
