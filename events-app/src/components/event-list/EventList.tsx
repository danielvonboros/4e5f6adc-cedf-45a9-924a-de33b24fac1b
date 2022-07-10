import React, { useState } from "react";
import EventCard from "../event-card/EventCard";
import { IEventData } from "../../helpers/eventtypes";

// @ts-ignore
const EventList: React.FC<{ events: IEventData[]; searchQuery: string }> = ({
  events,
  searchQuery,
}) => {
  const [idInShoppingCart, setIdInShoppingCart] = useState([]);
  if (!events) {
    return null;
  }

  const addToCartClick = (id: any) => {
    setIdInShoppingCart(id);
  };

  console.log(idInShoppingCart);

  /*
  The sort function compares the startTime of the different events,
  when an event doesn't have a startTime (some don't), it is compared to the date of the event
  (date also provides a time here) and then sorted and displayed 

  The allItems.filter method does not provide the desired items to be excluded from
  the list. The idea was to exclude the items that are being selected in the list with the 
  '+'- Button and display them in another component.
  */

  return (
    events &&
    events
      .filter((val) => {
        if (searchQuery === "") {
          return val;
        } else if (
          val.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return val;
        } else {
          return null;
        }
      })
      .sort((a, b) =>
        (a.startTime === undefined ? a.date : a.startTime) >
        (b.startTime === undefined ? b.date : b.startTime)
          ? 1
          : -1
      )
      .map((event: IEventData) => {
        return <EventCard event={event} addToCartClick={addToCartClick} />;
      })
  );
};

export default EventList;
