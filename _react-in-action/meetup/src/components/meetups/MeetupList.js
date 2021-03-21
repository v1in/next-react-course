import MeetupItem from "./MeetupItem";
import classes from "./styles/MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          title={meetup.title}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}
