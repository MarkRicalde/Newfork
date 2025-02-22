import React from "react";
import "../styles/HomePage.css";
import RecipeGrid from "../components/RecipeGridComponent";

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <h1 className="centered-heading" style={{ fontFamily: 'Arial, sans-serif' }}>Newfork</h1>
      <RecipeGrid />
    </div>
  );
};

export default HomePage;
