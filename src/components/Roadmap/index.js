import "./style.css"
export default function Roadmap({name,circleTop}) {
    return (
        <div className="roadmap" data-aos="fade-up">
            {circleTop ? <div className="roadmap-circle"></div> : ""}
            <div className="roadmap-line">
                <span>{name}</span>
                <div className="roadmap-circle"></div>
            </div>
        </div>
    );
}