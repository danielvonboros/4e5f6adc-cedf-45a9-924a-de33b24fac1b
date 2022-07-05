import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://tlv-events-app.herokuapp.com/events/uk/london";

const MainView: React.FC = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setEvents(response.data);
    });
  }, []);

  console.log(events);

  return <div>Main View</div>;
};

export default MainView;
