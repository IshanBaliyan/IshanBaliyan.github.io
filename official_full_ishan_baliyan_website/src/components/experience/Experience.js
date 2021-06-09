import "./experience.scss"
import { useEffect, useState } from "react";

export default function Experience() {
    
    // initially set to 0 so that it is on the first slide
    const [currentSlide, setCurrentSlide] = useState(0)

    // could have made this in a different class, like portfoliolist, but don't need to, cause it's shorter
    const data = [
        {
            id: "1",
            icon: "assets/experienceInfo/icon_graduation.png",
            title: "University of Waterloo Computer Science",
            desc: "UWaterloo CS 2026",
            img: "assets/experienceInfo/experience_waterloo.png",
        },
        {
            id: "2",
            icon: "assets/experienceInfo/icon_cssi.png",
            title: "Google Computer Science Summer Institute",
            desc: "Google CSSI 2021",
            img: "assets/experienceInfo/experience_cssi.jpg",
        },
        {
            id: "3",
            icon: "assets/experienceInfo/icon_robotics.png",
            title: "UWaterloo Social and Intelligent Robotics Research Lab (SIRRL)",
            desc: "Engineering Researcher",
            img: "assets/experienceInfo/experience_sirrl.png",
        },
        {
            id: "4",
            icon: "assets/experienceInfo/icon_first_robotics.png",
            title: "FIRST Robotics Team 2706, Merge Robotics",
            desc: "Software Programmer of Autonomous",
            img: "assets/experienceInfo/experience_first_robotics.jpg",
        },
        {
            id: "5",
            icon: "assets/experienceInfo/icon_shad.png",
            title: "SHAD Program at Ryerson University",
            desc: "Rigorous Entrepreneurship Summer Program for 30 days on university campus",
            img: "assets/experienceInfo/experience_shad.jpg",
        },  
    ];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 4) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    
    return (
        <div className="experience" id="experience">

            {/* So basically, the first slide is slide 0. So, 0 * 100 is still 0, so it won't move for the first slide.
            Next, for every next slide, it will move 100 vw, i.e. a full screen to the right, to get the that slide */}
            <div 
                className="slider" 
                style={{transform:`translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map(data=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={data.icon} alt=""/>
                                </div>
                                <h2>{data.title}</h2>
                                <p>
                                    {data.desc}
                                </p>
                                <span>Experience</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={data.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/white_arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/white_arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
