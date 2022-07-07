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
        {/* Because some of the titles are quite long, text is only displayed 
        for two lines and the overflow is hidden, so the filter function also works on the text
        that is hidden*/}
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
        {/* Because some events don't provide a startTime, but I wanted the CardSize to be equal to
        those that do, I added an additional line, that there was no exact time provided. */}

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
