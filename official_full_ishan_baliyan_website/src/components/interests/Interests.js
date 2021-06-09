import "./interests.scss"

export default function Interests() {

    const data = [
        
        {
            id: 1,
            name: "Exploration",
            title: "NASA Kennedy Space Center, Florida",
            img: "assets/interestsInfo/interest_travel.jpg",
            desc: "I have explored over 15 countries. In the photo above, I toured the NASA Kennedy Space Center and had lunch with a NASA astronaut.",
        },
        {
            id: 2,
            name: "Adventure",
            title: "Skydiving at 13,500 feet",
            img: "assets/interestsInfo/interest_skydive.jpg",
            desc: "As a dare and adventure for my 17th birthday, I went skydiving at 13,500 feet.",
            featured: true,
        },
        {
            id: 3,
            name: "Puzzles",
            title: "Rubik's cube, reading, and chess",
            img: "assets/interestsInfo/interest_rubik_cube.jpg",
            desc: "For fun, I like to solve Rubik's cubes, with a personal best of solving the 3x3 at 10 seconds and an average of 25 seconds. I also like reading, and I'm a novice at chess.",
        },
    ];

    return (
        <div className="interests" id="interests">
            <h1>Interests</h1>
            <div className="container">
                {/* "d" is the data, which maps out every single card in the data */}
                {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img 
                            src={d.img}
                            className="user" 
                            alt=""
                        />
                    </div>
                        <div className="center">
                            {d.desc}
                        </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
