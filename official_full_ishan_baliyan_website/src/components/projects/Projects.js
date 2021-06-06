import "./projects.scss"

export default function Projects() {

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/portfolio_donkey_kong_example.png" alt=""/>
                    <h3>Donkey Kong Java Game</h3>
                </div>
                <div className="item">
                    <img src="assets/portfolio_resella_logo.png" alt=""/>
                    <h3>Resella Java Webscraper</h3>
                </div>
                <div className="item">
                    <img src="assets/portfolio_high_low_game.png" alt=""/>
                    <h3>High Low Chance Java Game</h3>
                </div>
                <div className="item">
                    <img src="assets/portfolio_gear_one.jpeg" alt=""/>
                    <h3>In progress...</h3>
                </div>
                <div className="item">
                    <img src="assets/portfolio_gear_two.jpeg" alt=""/>
                    <h3>In progress...</h3>
                </div>
                <div className="item">
                    <img src="assets/portfolio_gear-three.jpeg" alt=""/>
                    <h3>In Progress...</h3>
                </div>
            </div>
        </div>
    )
}
