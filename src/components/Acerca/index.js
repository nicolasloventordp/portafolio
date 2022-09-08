import AcercaBox from "./components/AcercaBox"
import Roadmap from "../../components/Roadmap"
import "./style.css"

export default function Acerca() {
    return (
        <div className="acerca" id="acerca">
            <div className="section-grid">
                <Roadmap name="Acerca" circleTop={true} circleBottom={false}/>
                <AcercaBox />
            </div>
        </div>
    );
} 