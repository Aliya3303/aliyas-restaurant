import { useEffect, useState } from "react";

/* 🍨 ICE CREAM DATA (CUSTOM – REQUIRED) */
const iceCreams = [
  {
    idMeal: "ic1",
    strMeal: "Vanilla Ice Cream",
    strMealThumb:
      "https://images.unsplash.com/photo-1560008581-09826d1de69e",
  },
  {
    idMeal: "ic2",
    strMeal: "Chocolate Ice Cream",
    strMealThumb:
      "https://images.unsplash.com/photo-1566864399117-22c449669089",
  },
  {
    idMeal: "ic3",
    strMeal: "Strawberry Ice Cream",
    strMealThumb:
      "https://images.unsplash.com/photo-1633933358116-a27b902fad35",
  },
  {
    idMeal: "ic4",
    strMeal: "Mango Ice Cream",
    strMealThumb:
      "https://images.unsplash.com/photo-1505575967455-40e256f73376",
  },
];

function Menu({ selectedCategory }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
    Starters: "Starter",
    Veg: "Vegetarian",
    NonVeg: "Chicken",
    Sweets: "Dessert",
  };

  useEffect(() => {
    setLoading(true);

    /* 🍨 ICE CREAMS */
    if (selectedCategory === "Ice Creams") {
      setItems(iceCreams);
      setLoading(false);
      return;
    }

    /* 🍛 BIRYANI */
    if (selectedCategory === "Biryani") {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=biryani")
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then((res) => res.json())
        .then((data) => {
          setItems(data.meals ? data.meals.slice(0, 8) : []);
          setLoading(false);
        });
      return;
    }

    /* 🏠 HOME (ALL REAL CATEGORIES) */
    if (selectedCategory === "Home") {
      Promise.all([
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter"),
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"),
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"),
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"),
      ])
        .then((res) => Promise.all(res.map((r) => r.json())))
        .then((data) => {
          const allItems = data.flatMap((d) => d.meals).slice(0, 24);
          setItems(allItems);
          setLoading(false);
        });
      return;
    }

    /* 📂 NORMAL CATEGORY */
    const apiCategory = categoryMap[selectedCategory] || "Starter";

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${apiCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.meals ? data.meals.slice(0, 8) : []);
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading menu...</h2>;
  }

  return (
    <div
  style={{
    padding: "50px",
    background: "rgba(139, 0, 0, 0.79)",
  }}
>

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        {selectedCategory} Specials
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.idMeal}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              background: "white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h4>{item.strMeal}</h4>
              <p style={{ fontSize: "14px", color: "#777" }}>
                Chef special dish
              </p>
              <strong style={{ color: "#8B0000" }}>
                ₹{Math.floor(Math.random() * 200) + 150}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
