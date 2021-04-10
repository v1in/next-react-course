import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Layout>
        <p className="center">Loading...</p>
      </Layout>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Layout>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </Layout>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Layout>
        <div className="center">
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </Layout>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Layout>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Layout>
  );
}
