import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";

import EventList from "./../../components/events/EventList";
import EventSearch from "./../../components/events/EventSearch";

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default AllEventsPage;
