
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
export default function HeaderTabs({ sections }) {
    return (
        <div className="header-tabs">
            {sections?.map( (section, index) => <h5  key={index}><a href={"#"+section.toLowerCase()}>{section}</a></h5>)}
        </div>
    );
}
               