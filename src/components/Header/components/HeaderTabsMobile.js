export default function HeaderTabsMobile({ itemsTabs }) {
    return (
        <div className="header-box__tabs-mobile">
            {itemsTabs?.map( (tab, index) => <h5  key={index}><a href={"#"+tab.toLowerCase()}>{tab}</a></h5>)}
        </div>
    );
}
               