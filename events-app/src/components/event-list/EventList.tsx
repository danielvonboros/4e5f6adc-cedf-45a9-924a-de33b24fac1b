import React from "react";
import EventCard from "../event-card/EventCard";
import { IEventData } from "../../helpers/eventtypes";

const EventList: React.FC<{ events: IEventData[] }> = ({ events }) => {
  if (!events) {
    return null;
  }

  return (
    events &&
    events.map((event: IEventData) => {
      return <EventCard event={event} />;
    })
  );
};

export default EventList;
