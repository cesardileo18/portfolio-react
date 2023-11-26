const EducacionCard = ({ education }) => {
    return (
        <section className="education p-2">
            <div className="card card__education p-3 rounded-3">
                <img src={education.image} className="card-img-top im__education mt-2" alt={education.name} />
                <div className="card-body card__education__body">
                    <h5 className="card-title card__education__title">{education.name}</h5>
                </div>
                <h5 className="showMoreTextCertificate">{education.date}</h5>

            </div>
        </section>
    );
}

export default EducacionCard;