import { useNavigate, useParams } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./pageSection.module.css";
import { useMountedAnimation } from "../hooks/useMountedAnimation";
import IsLoading from "../components/ui/IsLoading";
import Error from "../components/ui/Error";
import { useEditMeetup } from "../hooks/useEditMeetup";
import { useGetSingleMeetup } from "../hooks/useGetSingleMeetup";
import useToast from "../hooks/useToast";

function EditMeetup() {
  const isMounted = useMountedAnimation();
  const [editMeetup, editError, editIsLoading] = useEditMeetup();
  const navigate = useNavigate();
  const { meetupId } = useParams();
  const [meetup, setMeetup, getMeetupIsLoading, getMeetupError] =
    useGetSingleMeetup(meetupId);
  const { toast } = useToast();

  async function handleEditMeetup(newMeetupData) {
    await editMeetup(newMeetupData);
    if (editError === null) {
      navigate("/");
      toast({ message: "Meetup edited successfully." });
    }
  }

  return (
    <section
      className={`${classes.pageSection} ${!isMounted ? classes.pageSectionHidden : ""}`}
    >
      <h1>Edit Meetup</h1>
      {getMeetupIsLoading ? (
        <IsLoading />
      ) : (
        <NewMeetupForm
          onFormSubmit={handleEditMeetup}
          isLoading={editIsLoading}
          getDataIsLoading={getMeetupIsLoading}
          meetupData={meetup}
        />
      )}
    </section>
  );
}
export default EditMeetup;
