import React from "react";
import EventCard from "../event-card/EventCard";
import { IEventList, IEventData } from "../../helpers/eventtypes";

const EventList: React.FC<{
  events: IEventList;
}> = (events) => {
  if (!events) {
    return null;
  }

  return events.map((event: IEventData) => <EventCard event={event} />);
};

export default EventList;
