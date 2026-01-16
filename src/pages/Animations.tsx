import "./page.scss" 
import Sphere from "../components/Sphere/Sphere"

const Animations = () => {

    return(
        <div className="page">
            <h1>Animations</h1>
            <div className="flex flex-column flex-alignItems-center">

                <div className="col-12 flex flex-alignItems-end" style={{height: "100dhv"}}>
                    <div className="sphere_1"></div>
                    <div className="glass-sphere"></div>

                </div>
                <div className="col-12 flex flex-alignItems-end" style={{height: "100dhv"}}>
                    <Sphere/>

                </div>
            </div>
        </div>
    )
}

export default Animations