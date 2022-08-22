import ContactoBox from "./components/ContactoBox"
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import "./style.css";

export default function Contacto() {
    const itemsSocialMedia = [
        {icon: <FaPhoneAlt />, text: "+5491158659304"},
        {icon: <FaRegEnvelope />, text: "nicolaslovento.94@gmail.com"},
        {icon: <FaMapMarkedAlt />, text: "Buenos Aires, Avellaneda"},
        {icon: <FaPhoneAlt />, text: "Prueba"}
    ]
    return (
        <div id="contacto" className="contacto">
            <ContactoBox itemsSocialMedia={itemsSocialMedia}/>
        </div>
    );
}