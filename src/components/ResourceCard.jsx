const ResourceCard = ({ resource, showUrdu }) => {
  const typeBadgeText = {
    helpline: 'Helpline',
    ngo: 'NGO',
    hospital: 'Hospital',
    online: 'Online',
    therapist: 'Therapist'
  };

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div className="card-name">{resource.name}</div>
          {showUrdu && resource.nameUrdu && (
            <div className="card-name-urdu">{resource.nameUrdu}</div>
          )}
        </div>
        <span className={`type-badge type-${resource.type}`}>
          {typeBadgeText[resource.type]}
        </span>
      </div>

      <div className="card-city">📍 {resource.city}, {resource.province}</div>

      <div>
        {resource.free && <span className="badge-free">Free</span>}
        {resource.available24h && <span className="badge-24h">24/7</span>}
      </div>

      <p className="card-description">{resource.description}</p>
      {showUrdu && resource.descriptionUrdu && (
        <p className="card-description-urdu">{resource.descriptionUrdu}</p>
      )}

      <div className="services-list">
        {resource.services.map((service, index) => (
          <span key={index} className="service-tag">
            {service}
          </span>
        ))}
      </div>

      <div className="card-footer">
        {resource.phone && <div className="card-phone">📞 {resource.phone}</div>}
        {resource.website && (
          <a
            href={resource.website}
            className="card-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website →
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
