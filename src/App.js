import React, { useState } from "react";
import "./App.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Rating } from "@mui/material";
import initialData from "./initialData";

function App() {
  const [rotations, setRotations] = useState(
    new Array(initialData.length)
      .fill(200)
      .map((item, index) => item + index * 35)
  );
  const [index, setIndex] = useState(0);
  const bgColors = ["#c5f8c7", "#7abd87"];
  const primaryColor = ["#4caf50", "#609b6c"];
  const [color, setColor] = useState(0);

  const handleNextAnimation = () => {
    const mentor = document.querySelectorAll(".mentor");
    mentor.forEach((item, index) => {
      item.style.transform = `rotate(+${
        rotations[(index + 1) % initialData.length]
      }deg) translateX(300px)`;
    });
    const rotationOfZero = rotations[0];
    rotations.shift();
    rotations.push(rotationOfZero);
    setRotations(rotations);
  };

  const handlePrevAnimation = () => {
    const mentor = document.querySelectorAll(".mentor");
    mentor.forEach((item, index) => {
      item.style.transform = `rotate(+${
        rotations[(index - 1 + initialData.length) % initialData.length]
      }deg) translateX(300px)`;
    });
    const rotationOfEnd = rotations[rotations.length - 1];
    for (let i = rotations.length - 1; i > 0; i--) {
      rotations[i] = rotations[i - 1];
    }
    rotations[0] = rotationOfEnd;
    setRotations(rotations);
  };

  const nextAnimation = () => {
    const mainImage = document.querySelector(".circle-image");
    mainImage.style.transition = "all 0.5s ease-in-out";
    mainImage.style.transform = "translate(-50%, 50%) rotate(50deg) scale(0.7)";
    mainImage.classList.add("fade");
    setTimeout(() => {
      mainImage.style.transform = "translate(-50%, 50%) rotate(0deg) scale(1)";
      mainImage.classList.remove("fade");
    }, 500);
  };

  const imgAnimation = () => {
    const mainImage = document.querySelector(".circle-image");
    mainImage.style.transition = "all 0.5s ease-in-out";
    mainImage.style.transform =
      "translate(-50%, 50%) rotate(-50deg) scale(0.7)";
    mainImage.classList.add("fade");
    setTimeout(() => {
      mainImage.style.transform = "translate(-50%, 50%) rotate(0deg) scale(1)";
      mainImage.classList.remove("fade");
    }, 500);
  };

  const slideAnimation = () => {
    const nameBox = document.querySelector(".name-container");
    nameBox.style.transition = "all 0.5s ease-in-out";
    nameBox.style.transform = "translate(-50%, 270%) translateX(100%)";
    nameBox.classList.add("fade");
    setTimeout(() => {
      nameBox.style.transform = "translate(-50%, 270%) translateX(0%)";
      nameBox.classList.remove("fade");
    }, 500);
  };

  const handleDown = () => {
    handlePrevAnimation();
    imgAnimation();
    slideAnimation();
    setIndex((index + 1) % initialData.length);
    setColor((color + 1) % bgColors.length);
  };

  const handleUp = () => {
    handleNextAnimation();
    nextAnimation();
    slideAnimation();
    setIndex((index - 1 + initialData.length) % initialData.length);
    setColor((color + 1) % bgColors.length);
  };
  return (
    <div className="App">
      <div
        className="details"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <h2
          className="ratings"
          style={{
            color: primaryColor[color],
            marginBottom: "0.5rem",
          }}
        >
          {initialData[index].rating === 5 ? "5.0" : initialData[index].rating}
        </h2>
        <Rating
          value={initialData[index].rating / 1.05}
          precision={0.5}
          readOnly
          style={{
            color: primaryColor[color],
            marginBottom: "0.5rem",
          }}
        />
        <h4 className="mentor-name">{initialData[index]?.name}</h4>
        <h5 className="mentor-title">{initialData[index]?.title}</h5>
        <p className="mentor-description">{initialData[index]?.description}</p>
        <button
          className="book-session"
          style={{
            backgroundColor: primaryColor[color],
          }}
        >
          Book a session
        </button>
      </div>
      <div
        className="circle"
        style={{
          backgroundColor: bgColors[color],
        }}
      >
        <div
          className="circle-image"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={initialData[index]?.image}
            alt={initialData[index]?.name}
            className="index-image"
          />
        </div>
        <div
          className="name-container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="index-mentor-name">{initialData[index].name}</h2>
        </div>
      </div>
      <div
        className="circle-overlay"
        style={{
          backgroundColor: bgColors[color],
        }}
      >
        <div className="circle-border">
          <div className="mentor">
            <img
              src={initialData[3].image}
              alt={initialData[3].name}
              className="mentor-image mimg-3"
            />
          </div>
          <div className="mentor">
            <img
              src={initialData[4].image}
              alt={initialData[4].name}
              className="mentor-image mimg-4"
            />
          </div>
          <div className="mentor">
            <img
              src={initialData[0].image}
              alt={initialData[0].name}
              className="mentor-image mimg-0"
            />
          </div>
          <div className="mentor">
            <img
              src={initialData[1].image}
              alt={initialData[1].name}
              className="mentor-image mimg-1"
            />
          </div>
          <div className="mentor">
            <img
              src={initialData[2].image}
              alt={initialData[2].name}
              className="mentor-image mimg-2"
            />
          </div>
        </div>
      </div>
      <div className="circle">
        <div className="circle-border-overlay">
          <div
            className="circle-border-inner-left"
            style={{
              backgroundColor: primaryColor[color],
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleDown}
          >
            <ArrowDownwardOutlinedIcon
              style={{
                color: "white",
                width: "50%",
                height: "50%",
              }}
            />
          </div>
          <div
            className="circle-border-inner-right"
            style={{
              backgroundColor: primaryColor[color],
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleUp}
          >
            <ArrowDownwardOutlinedIcon
              style={{
                color: "white",
                width: "50%",
                height: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
