import React from "react";
import axios from "axios";

const MainView: React.FC = () => {
  axios
    .get("https://tlv-events-app.herokuapp.com/events/uk/london")
    .then((data) => console.log(data));
  return <div>MainView</div>;
};

export default MainView;
