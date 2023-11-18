const CertificatesCard = ({certificate}) => {
    return ( 
        <section className="education p-2">
        <div className="card card__education p-3 rounded-3">
            <img src={certificate.image} className="card-img-top im__education mt-2" alt={certificate.name} />
            <div className="card-body card__education__body">
                <h5 className="card-title card__education__title">{certificate.name}</h5>
            </div>
        </div>
    </section>
     );
}
 
export default CertificatesCard;