import classes from "./pageSection.module.css";
import { useMountedAnimation } from "../hooks/useMountedAnimation";
import MeetupsList from "../components/meetups/MeetupsList";
import { useGetFavouritedMeetups } from "../hooks/useGetFavouritedMeetups";
import IsLoading from "../components/ui/IsLoading";
import Error from "../components/ui/Error";

function Favourites() {
  const isMounted = useMountedAnimation();
  const [favouritedMeetups, setFavouritedMeetups, isLoading, error] =
    useGetFavouritedMeetups();

  return (
    <section
      className={`${classes.pageSection} ${!isMounted && classes.pageSectionHidden}`}
    >
      <h1>My Favourites</h1>
      {isLoading ? (
        <IsLoading />
      ) : error ? (
        <Error error={error} />
      ) : favouritedMeetups.length === 0 ? (
        <p>You have no favourites yet.</p>
      ) : (
        <MeetupsList meetups={favouritedMeetups} />
      )}
    </section>
  );
}
export default Favourites;
