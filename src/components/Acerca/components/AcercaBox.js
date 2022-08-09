import AcercaPhoto from "./AcercaPhoto"
import AcercaPresentation from "./AcercaPresentation"

export default function AcercaBox({ className }) {
    return (
        <div className="acerca-box">
            <AcercaPhoto />
            <AcercaPresentation/>
        </div>
    );
}