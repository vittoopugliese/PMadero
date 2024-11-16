interface PropertyCardProps {
  property: {
    id: number;
    building: string;
    type: string;
    address: string;
    city: string;
    locality: string;
    price: number;
    description: string;
    image: string;
    number: string;
    email: string;
    properties: {
      area: number;
      rooms: number;
      bathrooms: number;
      parking: boolean;
      pool: boolean;
      security: boolean;
      elevator: boolean;
      garden: boolean;
      gym: boolean;
    };
  };
}

const PropertyCard = ({property}: PropertyCardProps) => {
  const {
    address,
    type,
    city,
    locality,
    price,
    description,
    image,
    properties: {area, rooms, bathrooms},
  } = property;

  return (
    <div className="property-card">
      <div className="image-container">
        <img src={image} alt={address} className="property-image" />
        <div className="photo-counter">
          <span className="counter-text">26</span>
          {/* <MaterialIcons name="photo-camera" size={14} color="white" /> */}
        </div>
        <div className="price-drop-badge">
          <span>Bajó de precio</span>
        </div>
      </div>

      <div className="card-content">
        <div className="price-container">
          <span className="price">$ {price.toLocaleString()}</span>
          <span className="discount">↓ 7%</span>
        </div>

        <h3 className="property-title">{address}</h3>
        <p className="property-location">
          {locality}, {city}
        </p>

        <div className="property-features">
          <span>{type}</span>
          <span className="separator">•</span>
          <span>{area} m²</span>
          <span className="separator">•</span>
          <span>{rooms} amb.</span>
          <span className="separator">•</span>
          <span>
            {bathrooms} {bathrooms > 1 ? "baños" : "baño"}
          </span>
        </div>

        <p className="property-description">{description}</p>

        <div className="action-buttons">
          <button className="call-button">
            {/* <Ionicons name="call-outline" size={20} color="#666" /> */}
          </button>
          <button className="whatsapp-button">
            WhatsApp
          </button>
          <button className="contact-button">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;