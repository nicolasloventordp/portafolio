import HeaderLogo from './HeaderLogo'
import HeaderTabs from './HeaderTabs'
import HeaderTabsMobile from './HeaderTabsMobile'
import HeaderSocialMedia from './HeaderSocialMedia'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import IconBarsMobile from '../../ui/IconBarsMobile'
import IconCircleMobile from '../../ui/IconCircleMobile'
import $ from 'jquery'
export default function HeaderBox() {
    const itemsTabs = ['HOME','ACERCA','CONTACTO'];
    const itemsSocialMedia = [
        {url: "https://www.instagram.com/nicolovento/", icon: <FaInstagram />},
        {url: "https://twitter.com/NicolasLovento", icon: <FaTwitter />},
        {url: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/", icon: <FaLinkedin />}
    ]

    
    const cerrarMenu = () => {
        $('.icon-circle-mobile').toggleClass("open");
    }
    return (
        <div className="header-box">
            <HeaderLogo text={"Nicolás Lo Vento"}/>
            <HeaderTabs itemsTabs={itemsTabs}/>
            <IconBarsMobile />
            <IconCircleMobile onClick={() => cerrarMenu()}/>
            <HeaderTabsMobile itemsTabs={itemsTabs}/>
            <HeaderSocialMedia itemsSocialMedia={itemsSocialMedia}/>
        </div>
    );
}