import ContactoCard from "./ContactoCard"

export default function ContactoBox({itemsSocialMedia}) {
    return (
        <div className="contacto-box" >
            {itemsSocialMedia?.map( (item,index) =>
                <ContactoCard icon={item.icon} text={item.text} position={ ( index % 2 ) == 0 ? "right" : "left"}/>
            )}
        </div>
    );
}