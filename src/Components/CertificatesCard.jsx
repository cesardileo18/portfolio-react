const CertificatesCard = ({ certificate }) => {
    return (
        <div className="card card__certificate m-2 p-3 rounded-3">
            <img src={certificate.image} className="card-img-top im__education mt-2" alt={certificate.name} />
            <div className="card-body card__certificate__body">
                <h5 className="card-title card__certificate__title">{certificate.name}</h5>
            </div>
            <h5 className="showMoreTextCertificate">{certificate.date}</h5>
        </div>
    );
}

export default CertificatesCard;