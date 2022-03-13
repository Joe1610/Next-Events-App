import EventItem from "./EventItem";

import classes from "./EventList.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <li>
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
