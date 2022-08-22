import photoCv from '../../../assets/images/foto-cv.png';
export default function AcercaPhoto() {
    return (
        <div className="acerca-box__photo" data-aos="fade-right">
            <img src={photoCv} />
        </div>
    );
}