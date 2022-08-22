import ContactoCard from "./ContactoCard"

export default function ContactoBox({itemsSocialMedia}) {
    return (
        <div className="contacto-box" >
            {itemsSocialMedia?.map( (item) =>
                <ContactoCard icon={item.icon} text={item.text}/>
            )}
        </div>
    );
}