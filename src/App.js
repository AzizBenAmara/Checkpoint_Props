import React from "react";
import ProfilAziz from "./Profil/profile component.js";
import UserImg from "./images/avatar.jpg";
import './App.css';

export default function App() {
  function handleName(name) {
    alert(`Hello, my Profil User is ${name}`);
  }

  return (
    <div>
      <ProfilAziz 
        fullName = "Aziz Ben Amara"
        profession = "Art Director"
        bio = "Art director / Star Wars fan / 38 years old"
        handleName = {handleName}
      >
      <img
        style={{ borderRadius: "100%", width: "200px", height: "200px" }}
        src={UserImg}
        alt="avatar"
      />
      </ProfilAziz>
    </div>
  );
}