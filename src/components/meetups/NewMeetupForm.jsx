import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import IsLoading from "../ui/IsLoading";

function NewMeetupForm({
  onFormSubmit,
  isLoading,
  getDataIsLoading,
  meetupData,
}) {
  const [title, setTitle] = useState(meetupData?.title || "");
  const [address, setAddress] = useState(meetupData?.address || "");
  const [description, setDescription] = useState(meetupData?.description || "");

  function handleFormSubmit(e) {
    e.preventDefault();

    const meetupNewData = {
      title,
      address,
      description,
      ...(meetupData && {
        id: meetupData.id,
      }),
    };

    onFormSubmit(meetupNewData);
  }

  return (
    <>
      {getDataIsLoading ? (
        <IsLoading />
      ) : (
        <div className={classes.formContainer}>
          <Card>
            <form className={classes.form} onSubmit={handleFormSubmit}>
              <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="image"
                  id="address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className={classes.actions}>
                {meetupData && (
                  <Link
                    to="/"
                    className={`${classes.button} ${classes.cancel}`}
                  >
                    Cancel
                  </Link>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={classes.button}
                >
                  {meetupData ? "Edit Meetup" : "Add Meetup"}
                </button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}
export default NewMeetupForm;
