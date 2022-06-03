import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import img from "../images/home.png";

function Home() {
  return (
    <div className="home">
      <img src={img} />
      <div className="button">
        <Link to="/usuario">Iniciar</Link>
      </div>
    </div>
  );
}

export default Home;
