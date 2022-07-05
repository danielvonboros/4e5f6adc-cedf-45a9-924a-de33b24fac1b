import React from "react";

const EventList: React.FC<{ event: any }> = ({ event }) => {
  return <div key={event._id}>{event.title}</div>;
};

export default EventList;
