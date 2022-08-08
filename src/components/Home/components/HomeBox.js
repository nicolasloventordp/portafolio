import HomeTitle from "./HomeTitle"
import Button from '../../ui/Button'
export default function HomeBox() {
    return (
        <div className="home-box">
            <HomeTitle title={"Bienvenidos a mi sitio."}/>
            <div class="home-line"></div>
            <a href="#contacto" class="home-link"><Button text={"Contáctame"}/></a>
        </div>
    );
}