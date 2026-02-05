import { useNavigate } from "react-router-dom";
function Hero() {
    const navigate = useNavigate();
  return (
    <div style={{
      height: "80vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}>
        <h1>Aliyas Restaurant</h1>
        <p>Authentic Taste, Timeless Experience</p>
        <button 
        onClick={() => navigate("/home")}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          fontSize: "16px",
          backgroundColor: "#F4A261",
          border: "none",
          cursor: "pointer"
        }}>
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Hero;
