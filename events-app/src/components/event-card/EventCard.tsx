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
          <Typography variant="h6" sx={{ color: "#615D6C", fontWeight: 600 }}>
            {event.title}
          </Typography>
        </Box>
        {event.flyerFront ? (
          <CardMedia
            component="img"
            height="450"
            image={event.flyerFront}
            alt={`event-${event._id}`}
          />
        ) : (
          <CardMedia
            component="img"
            height="450"
            image={"https://picsum.photos/350/450"}
            alt={`event-${event._id}`}
          />
        )}
        {event.startTime !== undefined ? (
          <>
            <Typography>{`starts: ${event.startTime}`}</Typography>
            <Typography>{`ends: ${event.endTime}`}</Typography>{" "}
          </>
        ) : (
          <>
            <Typography>{`date: ${event.date}`}</Typography>

            <Typography>no exact time provided</Typography>
          </>
        )}
        <a href={event.venue.direction} target="_blank" rel="noreferrer">
          <Typography variant="body1" sx={{ mt: 1, fontWeight: 600 }}>
            {event.venue.name}
          </Typography>
        </a>
        <Typography>
          {event.city} | {event.country}
        </Typography>
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
