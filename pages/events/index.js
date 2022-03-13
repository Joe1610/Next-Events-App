import { getAllEvents } from "../../dummy-data";
import EventList from "./../../components/events/EventList";

function AllEventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1>All Events Page</h1>
      <EventList items={allEvents} />
    </div>
  );
}

export default AllEventsPage;
