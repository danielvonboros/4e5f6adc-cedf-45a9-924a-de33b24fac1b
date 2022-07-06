import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../event-list/EventList";
import { IEventData } from "../../helpers/eventtypes";
import { Box } from "@mui/material";

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
      <Box sx={{ width: "100vw", backgroundColor: "#EBF5FF" }}>
        <h2>Events</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            flexWrap: "wrap",
          }}
        >
          <EventList events={events} />
        </Box>
      </Box>
    </>
  );
};

export default MainView;
