import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://picsum.photos/id/237/400/200.webp",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "https://picsum.photos/id/238/400/200.webp",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={DUMMY_DATA} />
      </ul>
    </section>
  );
};

export default AllMeetupsPage;
