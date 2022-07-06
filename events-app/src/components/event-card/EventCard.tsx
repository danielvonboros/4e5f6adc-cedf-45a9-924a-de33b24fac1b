import React from "react";
import { IEventData } from "../../helpers/eventtypes";

const EventCard: React.FC<{ event: IEventData }> = ({ event }) => {
  if (!event) {
    return null;
  }

  return (
    <div key={event._id}>
      <h4>{event.title}</h4>
      {/* 
      <div style={{ maxHeight = "300px", maxWidth = "150px" }}>
        <img src={event.flyerFront} alt={event._id} />
      </div> */}
      <p>{event.city}</p>
      <p>{event.country}</p>
    </div>
  );
};

export default EventCard;
