import React, { useState, useEffect } from "react";
import axios from "axios";
import EventList from "../event-list/EventList";
import { IEventData } from "../../helpers/eventtypes";
import { Box, CircularProgress, Typography } from "@mui/material";
import TopBar from "../top-bar/TopBar";

const URL = "https://tlv-events-app.herokuapp.com/events/uk/london";

const MainView: React.FC = () => {
  const [events, setEvents] = useState<IEventData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setEvents(response.data);
      setIsLoading(false);
    });
  }, []);

  if (!events && isLoading)
    return (
      <>
        <CircularProgress sx={{ m: "40vh auto" }} disableShrink />
        <Typography sx={{ m: "0 auto" }}>
          Loading Event Data, Please wait
        </Typography>
      </>
    );

  return (
    <>
      <Box sx={{ width: "100vw", backgroundColor: "#EBF5FF" }}>
        <TopBar />
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
