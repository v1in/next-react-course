import EventItem from './EventItem';

import classes from './styles/EventList.module.css';

export default function EventList(props) {
  const {items} = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  );
}
