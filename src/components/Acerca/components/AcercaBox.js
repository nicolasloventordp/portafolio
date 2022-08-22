import AcercaPhoto from "./AcercaPhoto"
import AcercaPresentation from "./AcercaPresentation"
import Button from '../../ui/Button'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

export default function AcercaBox() {
    return (
        <div className="acerca-box">
            <AcercaPhoto />
            <AcercaPresentation/>
            <Button className={"btn-cv"} text={"Descargar cv"} icon={faFileDownload} animation={"fade-up"}/>
        </div>
    );
}