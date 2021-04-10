import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import Layout from "../../components/layout/Layout"; // For example, added for all events pages
import EventsSearch from "../../components/events/EventsSearch";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Layout>
      <h1>All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Layout>
  );
}
