import { useMediaWidth } from "../hooks/useMediaWidth";

const Header = () => {
  const imageWebSource = "../../navlogo.png";
  const imageMobileSource = "../../icon.png";

  const { isMobile } = useMediaWidth();

  const imageSource = isMobile ? imageMobileSource : imageWebSource;

  return (
    <nav>
      <img src={imageSource} alt="Logo" height="42px" />

      <div className="nav-links">
        <a>Propiedades</a>
        <a>Nosotros</a>
      </div>
    </nav>
  );
};

export default Header;
