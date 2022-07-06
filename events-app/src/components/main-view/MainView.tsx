import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../event-list/EventList";
import { IEventData } from "../../helpers/eventtypes";

const URL = "https://tlv-events-app.herokuapp.com/events/uk/london";

const MainView: React.FC = () => {
  const [events, setEvents] = useState<IEventData[]>([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setEvents(response.data);
    });
  }, []);

  if (!events) return null;

  return (
    <>
      <h2>Events</h2>
      <EventList events={events} />
    </>
  );
};

export default MainView;
