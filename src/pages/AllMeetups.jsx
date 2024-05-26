import MeetupsList from "../components/meetups/MeetupsList";
import IsLoading from "../components/ui/IsLoading";
import Error from "../components/ui/Error";
import classes from "./pageSection.module.css";
import { useMountedAnimation } from "../hooks/useMountedAnimation";
import { useGetMeetups } from "../hooks/useGetMeetups";

function AllMeetups() {
  const [meetups, setMeetups, isLoading, error] = useGetMeetups();
  const isMounted = useMountedAnimation();

  function deleteMeetupHandler(deletedMeetupId) {
    setMeetups((prevMeetups) =>
      prevMeetups.filter((ele) => ele.id !== deletedMeetupId),
    );
  }

  /**********************************************

    TODO


    add favourite in edit ??

  **********************************************/

  return (
    <>
      <section
        className={`${classes.pageSection} ${!isMounted ? classes.pageSectionHidden : ""}`}
      >
        <h1>All Meetups</h1>
        {isLoading ? (
          <IsLoading />
        ) : error ? (
          <Error error={error} />
        ) : (
          <MeetupsList
            meetups={meetups}
            onDeletedMeetup={deleteMeetupHandler}
          />
        )}
      </section>
    </>
  );
}
export default AllMeetups;
