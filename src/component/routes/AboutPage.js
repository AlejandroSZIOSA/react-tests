import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  const toHomePage = () => {
    navigate("/HomePage");
  };

  return (
    <div>
      About Page
      <button onClick={toHomePage}>To Home Page</button>
    </div>
  );
}
