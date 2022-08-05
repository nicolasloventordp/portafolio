import HeaderLogo from './HeaderLogo';
import HeaderTabs from './HeaderTabs';

export default function HeaderBox() {
    return (
        <div className="header-box">
            <HeaderLogo logoContent={""}/>
            <HeaderTabs sections={['HOME','ACERCA','CONTACTO']}/>
        </div>
    );
}