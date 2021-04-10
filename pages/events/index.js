import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import Layout from "../../components/layout/layout"; // For example, added for all events pages

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Layout>
      <h1>All Events</h1>
      <EventList items={featuredEvents} />
    </Layout>
  );
}
