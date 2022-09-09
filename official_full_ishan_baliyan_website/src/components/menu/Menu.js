import "./menu.scss"


export default function Menu({ menuOpen, setMenuOpen }) {
    return (

        // if the menuOpen variable is true (which is possible from cliking the topbar menu three lines), make it use active class, so the menu is visible
        <div className={"menu " + (menuOpen && "active") }>
            <ul>

                {/* Not the best practice, since normally you should components so you only need to call onClick function once.
                Nonetheless, this onclick turns the menu off after the click a navigation area, so it gets out of the way.
                i.e. you click a section, like "home", and it will take you there and make the menu sidebar disappear */}

                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#experience">Experience</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#interests">Interests</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}
