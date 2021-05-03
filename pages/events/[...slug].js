import { getFilteredEvents } from "../../helpers/utils";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import MainLayout from "../../components/layout/MainLayout";

export default function FilteredEventsPage(props) {
  if (props.hasError) {
    return (
      <MainLayout>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </MainLayout>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <MainLayout>
        <div className="center">
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </MainLayout>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <MainLayout>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  if (!filterData) {
    return (
      <MainLayout>
        <p className="center">Loading...</p>
      </MainLayout>
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
    return {
      props: { hasError: true },
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
