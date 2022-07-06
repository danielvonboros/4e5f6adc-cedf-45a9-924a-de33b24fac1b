import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { IEventData } from "../../helpers/eventtypes";

const EventCard: React.FC<{ event: IEventData }> = ({ event }) => {
  if (!event) {
    return null;
  }

  const card = (
    <>
      <CardContent>
        <Box sx={{ height: "4.5em", overflow: "hidden" }}>
          <Typography variant="h6" sx={{ color: "#615D6C" }}>
            {event.title}
          </Typography>
        </Box>
        <CardMedia
          component="img"
          height="450"
          image={event.flyerFront}
          alt={`event-${event._id}`}
        />
        <Typography>{event.city}</Typography>
        <Typography>{event.country}</Typography>
      </CardContent>
    </>
  );

  return (
    <Card
      key={event._id}
      variant="outlined"
      sx={{
        width: 350,
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      {card}
    </Card>
  );
};

export default EventCard;
