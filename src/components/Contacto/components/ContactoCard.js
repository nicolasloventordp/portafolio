export default function ContactoCard({icon, text, position}) {
    return (
        <div className="contacto-box__card" style={position == "left" ? {left : "150px"} : {right : "150px"}} data-aos={position == "left" ? "fade-left" : "fade-right"}>
            <div class="contacto-box__card-icon">{icon}</div>
            <div class="contacto-box__card-text">
                <span>{text}</span>
            </div>
        </div>
    );
}