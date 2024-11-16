import { Link } from "react-router-dom";

export default function ViewAllButton({text, route}:any) {
  return (
    <Link to={route} className="button-container">
      <div className="button-container">
        <button className="view-all-button">{text}</button>
      </div>
    </Link>
  );
}
