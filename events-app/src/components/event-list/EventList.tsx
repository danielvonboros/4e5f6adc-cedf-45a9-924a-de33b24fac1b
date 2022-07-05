import React from "react";

const EventList: React.FC<{ events: any }> = ({ events }) => {
  if (!events) {
    return null;
  }

  return events.map((event) => <div key={event._id}>{event.title}</div>);
};

export default EventList;
