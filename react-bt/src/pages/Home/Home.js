import React from "react";
import Card from "../../components/Card";
import cardImage from "../../assets/picture/card-img.png";
const Home = (props) => {
  return (
    <>
      <h2>My Home Page</h2>
      <div className="row">
        <Card title="Anik Ronjon" />
        <Card />
      </div>
    </>
  );
};

export default Home;
