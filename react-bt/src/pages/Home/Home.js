import React from "react";
import Card from "../../components/Card";
import cardImage from "../../assets/picture/card-img.png";
const Home = (props) => {
  return (
    <>
      <h2>My Home Page</h2>
      <div className="row">
        <Card
          imgLink={cardImage}
          title="Anik Ronjon Barmon"
          text="You can write your CSS"
          btnLink="https://google.com"
        />
        <Card
          imgLink={cardImage}
          title="Anik Ronjon Barmon"
          text="You can write your CSS"
          btnLink="https://google.com"
        />
      </div>
    </>
  );
};

export default Home;
