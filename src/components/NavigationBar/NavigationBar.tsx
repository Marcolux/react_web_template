import { Link } from "react-router-dom";
import './navigation-bar.scss'

const NavigationBar = () => {

    return (
        <nav aria-label="Main navigation" className="flex flex-alignItems-center flex-justifyContent-center navBar">
            <Link className="navLinks" to={'/'}>Home Page</Link>
            <Link className="navLinks" to={'/Carousels'}>Carousels</Link>
            <Link className="navLinks" to={'/page_2'}>Page 2</Link>
            <Link className="navLinks" to={'/Animations'}>Animations</Link>
        </nav>
    )
}

export default NavigationBar