import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./pageSection.module.css";
import { useMountedAnimation } from "../hooks/useMountedAnimation";
import { useNewMeetup } from "../hooks/useNewMeetup";
import IsLoading from "../components/ui/IsLoading";
import Error from "../components/ui/Error";
import useToast from "../hooks/useToast";

function NewMeetup() {
  const isMounted = useMountedAnimation();
  const [addNewMeetup, error, isLoading] = useNewMeetup();
  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleAddNewMeetup(newMeetupData) {
    await addNewMeetup(newMeetupData);
    if (error === null) {
      navigate("/");
      toast({ message: "Meetup added successfully." });
    }
  }

  // if (isLoading) {
  //   return <IsLoading />;
  // }

  // if (error) {
  //   return <Error error={error} />;
  // }

  return (
    <section
      className={`${classes.pageSection} ${!isMounted ? classes.pageSectionHidden : ""}`}
    >
      <h1>Add New Meetup</h1>
      <NewMeetupForm onFormSubmit={handleAddNewMeetup} isLoading={isLoading} />
    </section>
  );
}
export default NewMeetup;
