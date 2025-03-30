import Head from 'next/head';
import {useRouter} from 'next/router';

import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import MainLayout from '../../components/layout/MainLayout';
import {getAllEvents} from '../../helpers/utils';
import NewsletterRegistration from '../../components/input/newsletter-registration';
import {NotificationContextProvider} from '../../store/notification-store';

export default function AllEventsPage(props) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <NotificationContextProvider>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
        </Head>
        <MainLayout>
          <h1>All Events</h1>
          <EventsSearch onSearch={findEventsHandler} />
          <NewsletterRegistration />
          <EventList items={props.events} />
        </MainLayout>
      </NotificationContextProvider>
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 1800,
  };
}
