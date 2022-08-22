export default function ContactoCard({icon, text}) {
    return (
        <div className="contacto-box__card">
            <div class="contacto-box__card-icon">{icon}</div>
            <div class="contacto-box__card-text">
                <span>{text}</span>
            </div>
        </div>
    );
}