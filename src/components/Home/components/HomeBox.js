import HomeTitle from "./HomeTitle"
import Button from '../../ui/Button'
export default function HomeBox() {
    return (
        <div className="home-box">
            <HomeTitle title={"Bienvenidos a mi sitio."}/>
            <div class="home-box__line" data-aos="fade-right"></div>
            <a href="#contacto" data-aos="fade-up"><Button text={"Contáctame"} className="home-box__btn"/></a>
        </div>
    );
}