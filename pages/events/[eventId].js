import {getEventById, getFeaturedEvents} from '../../helpers/utils';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import ErrorAlert from '../../components/ui/ErrorAlert';
import MainLayout from '../../components/layout/MainLayout';
import Comments from '../../components/input/comments';
import {NotificationContextProvider} from '../../store/notification-store';

export default function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <MainLayout>
        <ErrorAlert>
          <p className='center'>No event found!</p>
        </ErrorAlert>
      </MainLayout>
    );
  }

  return (
    <NotificationContextProvider>
      <MainLayout>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
        <Comments eventId={event.id} />
      </MainLayout>
    </NotificationContextProvider>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({params: {eventId: event.id}}));

  return {
    paths: paths,
    fallback: true,
  };
}
