import { CgMoreO } from "react-icons/cg";
import { FaPhone, FaDollarSign, FaWhatsapp, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { parseTextToMaxNumberOfLines } from "../constants/SharedFunctions";

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
    bajo:boolean;
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
    bajo,
    properties: {area, rooms, bathrooms},
  } = property;

  const handleButton = (type: string) => () => {
    switch (type) {
      case "call":
        window.open(`tel:${property.number}`, "_self");
        break;
      case "whatsapp":
        window.open(`https://wa.me/${property.number}`, "_blank")?.focus();
        break;
      case "contact":
        window.open(`mailto:${property.email}`, "_self");
        break;
      default:
        break;
    }
  }

  return (
    <Link to={`/propiedades/${property.id}`}>
      <div className="property-card">
        <div className="image-container">
          <img src={image} alt={address} className="property-image" />
          <div className="photo-counter">
            <span className="counter-text">26</span>
            <FaCamera size={16} color="white" />
          </div>
          
          { bajo && (
              <div className="price-drop-badge">
                <FaDollarSign size={15} color="white" />
                <span>Bajó de precio</span>
              </div>
          )}
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

          <p className="property-description">{parseTextToMaxNumberOfLines(description)}</p>

          <div className="action-buttons">
            <button className="call-button" onClick={handleButton("call")}>
              <FaPhone size={16} color="grey" style={{rotate: "102deg"}} /> 
            </button>

            <button className="whatsapp-button" onClick={handleButton("whatsapp")}>
              <FaWhatsapp size={18} color={"white"} />
              WhatsApp
            </button>

            <button className="contact-button" onClick={handleButton("contact")}>
              <CgMoreO size={15} color={"white"} type=""/> 
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;