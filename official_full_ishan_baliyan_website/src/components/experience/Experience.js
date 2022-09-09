import "./experience.scss"
import { useEffect, useState } from "react";

export default function Experience() {
    
    // initially set to 0 so that it is on the first slide
    const [currentSlide, setCurrentSlide] = useState(0)

    // could have made this in a different class, like portfoliolist, but don't need to, cause it's shorter
    const data = [
        {
            id: "1",
            icon: "assets/experienceInfo/icon_cssi.png",
            title: "Atolio Technologies (California Startup)",
            subhead: "Backend Engineering Intern | May 2022-Dec 2022",
            desc: "• Built live‑streaming microservice in C++ and Golang, with gRPC framework, for streaming real‑time user and application data using Okta" +
            "System Log API and SDK, resulting in real‑time updates for clients, 5% efficiency in application, and 10% reduction for deployment costs." +
            "\n\n• Deployed user live‑streaming feature on main application, running on docker container with AWS EC2/ECS and S3 on linux host." +
            "\n\n• Implemented Backfilling feature that transforms data from 10,000+ users, apps and appusers to digest into application with gRPC.",
            img: "assets/experienceInfo/experience_atolio.png",
            stack: "Golang, C++, gRPC, AWS EC2/EC2/S3, Docker, REST Api",
        },
        {
            id: "2",
            icon: "assets/experienceInfo/icon_robotics.png",
            title: "MIT Driverless Team",
            subhead: "Backend Engineering | April 2022-Present",
            desc: "• Engineered self-driving racecar simulation systems in C++ and ROS2 on linux, improving simulation of racecar in LGSVL self‑driving virtual environment"+
            " and maintaing infrastructure for 100+ team members.\n\n• Built backend simulation and linux host infrastructure for driverless racecar in Indy Autonomous racecar competition." +
            ", and increased system runtime by 20% by improving derived docker devcontainer image build process.",
            img: "assets/experienceInfo/experience_mit_driverless.jpg",
            stack: "C++, ROS, LGSVL, Docker",
        },
        {
            id: "3",
            icon: "assets/experienceInfo/icon_cssi.png",
            title: "Google Computer Science Summer Institute",
            subhead: "Google CSSI Scholar | July 2021-Present",
            desc: "• Completed 4‑week intensive summer program organized by Google, and designed 16+ web apps in JavaScript/HTML/CSS and Firebase." +
            "\n\n• Built Google Chalkboard web app with JavaScript, Firebase, Google Oath2 security, and Python Machine learning model with Tensor‑" +
            "Flow on the MNIST dataset, where app gained 50 unique clones on GitHub from cohort and presented to Google staff. ",
            img: "assets/experienceInfo/experience_cssi.jpg",
            stack: "Python, Tensorflow, Firebase, JavaScript/HTML/CSS",
        },
        {
            id: "4",
            icon: "assets/experienceInfo/icon_robotics.png",
            title: "UWaterloo Social and Intelligent Robotics Research Lab (SIRRL)",
            subhead: "Undergradute Student Researcher | July 2020-Present",
            desc: "• Evaluating software and hardware specifications of 100+ robots in Social Robotics (under Prof. Dautenhahn, Canada Research Chair)." +
            "\n\n• Analyzing robot data insights from 8000+ papers for robot level of autonomy, DOF, fabrication, and testing in Systematic Review paper",
            img: "assets/experienceInfo/experience_sirrl.png",
            stack: "Social Robotics Research, Autonomous robot analysis",
        },
        {
            id: "5",
            icon: "assets/experienceInfo/icon_first_robotics.png",
            title: "FIRST Robotics Team 2706, Merge Robotics",
            subhead: "Software Programmer of Autonomous | July 2017-July 2021",
            desc:"• Programmed autonomous driving in Java, while using Python OpenCV computer vision with Raspberry Pi and ultrasonic sensors." +
            "\n\n• Placed World Division Finalist in FIRST Robotics Competition World Championships (Top 35 from 4000+ teams) in 2018." +
            "\n\n• Led and Represented 25,000 members of FIRST Robotics to organize and host National Hackathons, Conferences, Summer camps, " +
            "community initiatives (featured in news), and interviews with President of 3M Canada and CEOs",
            img: "assets/experienceInfo/experience_first_robotics.jpg",
        },
        // {
        //     id: "6",
        //     icon: "assets/experienceInfo/icon_shad.png",
        //     title: "SHAD Program at Ryerson University",
        //     desc: "Rigorous Entrepreneurship Summer Program for 30 days on university campus",
        //     img: "assets/experienceInfo/experience_shad.jpg",
        // },  
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
                                <h3 style={{fontStyle: 'italic'}}>{data.subhead}</h3>
                                <span>{data.stack}</span>
                                <p>
                                    {data.desc}
                                </p>
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
