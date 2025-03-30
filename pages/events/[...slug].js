import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import useSWR from 'swr';

import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/ErrorAlert';
import MainLayout from '../../components/layout/MainLayout';

export default function FilteredEventsPage() {
  const router = useRouter();

  const [loadedEvents, setLoadedEvents] = useState();

  const filterData = router.query.slug;

  const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_EVENTS_API_URL}`);

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return (
      <MainLayout>
        <p className='center'>Loading...</p>
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
    numMonth > 12 ||
    error
  ) {
    return (
      <MainLayout>
        <div className='center'>
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <Button link='/events'>Show All Events</Button>
        </div>
      </MainLayout>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <MainLayout>
        <div className='center'>
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link='/events'>Show All Events</Button>
        </div>
      </MainLayout>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <MainLayout>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </MainLayout>
  );
}
