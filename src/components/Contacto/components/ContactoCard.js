export default function ContactoCard({icon, text, position}) {
    return (
        <div className="contacto-box__card" style={position == "left" ? {float : "left"} : {float : "right"}} data-aos={position == "left" ? "fade-left" : "fade-right"}>
            <div class="contacto-box__card-icon">{icon}</div>
            <div class="contacto-box__card-text">
                <span>{text}</span>
            </div>
        </div>
    );
}