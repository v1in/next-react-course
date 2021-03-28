import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import Logo from "../logo/logo";

export default function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Logo />
      <h1>All Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
