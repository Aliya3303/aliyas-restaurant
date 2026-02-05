import { useNavigate } from "react-router-dom";
import "./index.css";

function Index() {
  const navigate = useNavigate();

  return (
    <>
      

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Aliyas Restaurant</h1>
          <p>Authentic Taste • Timeless Experience</p>

          <button
            className="menu-btn"
            onClick={() => navigate("/home")}
          >
            View Menu
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
