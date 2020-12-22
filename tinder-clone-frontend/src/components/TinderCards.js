import "./TinderCards.css";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "../axios";
// import markImage from "../assets/images/elon.jpg";

const TinderCards = () => {
  // const [people, setPeople] = useState([
  //   {
  //     name: "Mark Zuckerberg",
  //     url:
  //       "http://1.bp.blogspot.com/-kkHaR78TEZM/UPJg8ixAtQI/AAAAAAAAeNA/H_KVseDCIps/s1600/Mark+Zuckerberg+2.jpg",
  //   },
  //   {
  //     name: "Jeff Bezos",
  //     url:
  //       "https://www.success.com/wp-content/uploads/2018/07/JeffBezos_SecretstoSuccess-1-1024x682.jpg",
  //   },
  //   {
  //     name: "Elon Musk",
  //     url:
  //       "http://wallsdesk.com/wp-content/uploads/2017/01/Elon-Musk-High-Definition-Wallpapers-.jpg",
  //   },
  // ]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      console.log("Response : ", req);
      setPeople(req.data);
    }
    fetchData();
  }, []);

  console.log("Peoples : ", people);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing : ", nameToDelete);
    // setLastDirection(direction);
  };

  const outOfTheme = (name) => {
    console.log("Left the Screen : ", name);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfTheme(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
