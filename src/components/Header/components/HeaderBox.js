import HeaderLogo from './HeaderLogo';
import HeaderTabs from './HeaderTabs';
import HeaderSocialMedia from './HeaderSocialMedia';
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function HeaderBox() {
    const itemsTabs = ['HOME','ACERCA','CONTACTO'];
    const itemsSocialMedia = [
        {url: "https://www.instagram.com/nicolovento/", icon: <FaInstagram />},
        {url: "https://twitter.com/NicolasLovento", icon: <FaTwitter />},
        {url: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/", icon: <FaLinkedin />}
    ]
    return (
        <div className="header-box">
            <HeaderLogo text={"Nicolás Lo Vento"}/>
            <HeaderTabs itemsTabs={itemsTabs}/>
            <HeaderSocialMedia itemsSocialMedia={itemsSocialMedia}/>
        </div>
    );
}