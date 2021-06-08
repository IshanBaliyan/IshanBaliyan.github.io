import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li 
            // if active is true, make the portfolio active, otherwise not
            className={active ? "portfolioList active" : "portfolioList"}

            // if the submenu category is clicked (e.g. featured, mobile, web, etc...), set the current selected project to be the THIS one with its id.
            onClick={() => setSelected(id)}
        >
            {/* takes the title as a prop and displays it */}
            {title}
        </li>
    )
}
