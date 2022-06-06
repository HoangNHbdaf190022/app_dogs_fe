import React from "react";
import "./Home.css";
import "animate.css";
import Pull from './imgCard/bulldog.png';
// import Nova from './imgCard/nova.png';
import Pug from './imgCard/pug.png';
import Spaniel from './imgCard/spaniel.png';

const Home = () => {

  return (
    <div className="home-container">
      <header className="animate__animated animate__backInDown">
        🐶 WELCOME TO MY SHOP 🐶
      </header> <br />

      <div className="cardHome-content ">
        <img className="cardHome-items 
        animate__animated 
        animate__bounceInUp 
        animate__slow" src={Pug} alt="" />
        <img className="cardHome-items 
        animate__animated 
        animate__bounceInUp 
        animate__slow" src={Spaniel} alt="" />
        <img className="cardHome-items 
        animate__animated 
        animate__bounceInUp 
        animate__slow" src={Pull} alt="" />
        </div>
    </div>
  );
};

export default Home;
