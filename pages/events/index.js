import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>All Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
