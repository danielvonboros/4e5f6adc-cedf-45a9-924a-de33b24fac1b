import React from "react";
import EventCard from "../event-card/EventCard";
import { IEventData } from "../../helpers/eventtypes";

// @ts-ignore
const EventList: React.FC<{ events: IEventData[] }> = ({ events }) => {
  if (!events) {
    return null;
  }

  return (
    events &&
    events
      .sort((a, b) =>
        (a.startTime === undefined ? a.date : a.startTime) >
        (b.startTime === undefined ? b.date : b.startTime)
          ? 1
          : -1
      )
      .map((event: IEventData) => {
        return <EventCard event={event} />;
      })
  );
};

export default EventList;
