
import "./Navbar.css";

function Navbar({ selectedCategory, setSelectedCategory }) {
  const buttons = [
    "Home",
    "Starters",
    "Veg",
    "NonVeg",
    "Biryani",
    "Ice Creams",
    "Sweets",
    "More",
  ];

  return (
    <div className="navbar">
      {/* Left side brand */}
      <div className="brand">Aliyas Restaurant</div>

      {/* Right side buttons */}
      <div className="nav-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`nav-btn ${
              selectedCategory === btn ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
