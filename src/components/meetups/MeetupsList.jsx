import classes from "./MeetupsList.module.css";
import MeetupsItem from "./MeetupsItem";

function MeetupsList({ meetups, onDeletedMeetup }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupsItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          onDeletedMeetup={onDeletedMeetup}
        />
      ))}
    </ul>
  );
}
export default MeetupsList;
