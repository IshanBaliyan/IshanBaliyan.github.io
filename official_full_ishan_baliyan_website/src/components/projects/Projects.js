import "./projects.scss";
import { useEffect, useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import {featuredPortfolio, 
        webPortfolio, 
        mobilePortfolio, 
        designPortfolio, 
        contentPortfolio} from "../../data"

export default function Projects() {

    /* THIS is important understanf the two lines below for setting const. Basically, what is happening is that the first parameter is the name of the variable
       and the second parameter is the name of the method to CHANGE THE VARIABLE. The second parameter is NOT a variable, but a function to change the first variable.
    */

    // initial use state submenu selected is "featured". setSelected is used to determine the page to take the user to, when selected
    const[selected,setSelected] = useState("featured");

    // Blank in initial state. Used for the data of projects in each subsection. setData changes the data with the switch cases in useEffect()
    const[data,setData] = useState([]);

    // holds all the titles for the submenu in the projects section
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Design App",
        },
        {
            id: "design",
            title: "Games",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    // every time the selected value changes (at the bottom of the function), useEffect() will be run
    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    },[selected]);

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {/* goes through EACH title (e.g. featured, mobile, web, etc...) and shows all the titles for submenu in Projects section.*/}
                {list.map(item=>(
                    <PortfolioList 
                        title={item.title} 

                        // sending true or false if the selected item is the same as the item id
                        active={selected === item.id} 

                        // sending the setSelected function to use for each submenu item.
                        setSelected={setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                
                {/* shows all item images and titles for the current chosen submenu (e.g. featured, mobile, web, etc...). setData is used in useEffect() to change the shown data (projects) */}
                {data.map((data)=>(
                <div className="item">
                    <a href={data.url} rel="noreferrer" target="_blank" rel="noreferrer">
                            <img
                                src={data.img}
                                alt=""
                            />
                            <h3>{data.title}</h3>
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
}
