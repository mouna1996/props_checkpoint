import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import PorfilPhoto from "./image/mouna.jpg";

const handleName = (name) => {
  alert(name);
};
const style = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  marginTop: "5%",
  objectFit: "cover",
  objectPosition: "0 -8px",
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="Mouna hedhili"
        profession="sport teacher"
        handleName={handleName}
      >
        <img src={PorfilPhoto} alt="logo" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;
