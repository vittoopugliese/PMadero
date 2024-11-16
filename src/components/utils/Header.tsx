import { Link } from "react-router-dom";
import { useMediaWidth } from "../../hooks/useMediaWidth";

const Header = () => {
  const imageWebSource = "../../navlogo.png";
  const imageMobileSource = "../../icon.png";

  const { isMobile } = useMediaWidth();

  const imageSource = isMobile ? imageMobileSource : imageWebSource;

  return (
    <nav>
      <Link to="/" style={{top: 2, position:'relative'}}>
        <img src={imageSource} alt="Logo" height="42px"/>
      </Link>

      <div className="nav-links">
        <Link to="/propiedades">Propiedades</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
