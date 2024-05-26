import { useContext, useState } from "react";
import Card from "../ui/Card";
import classes from "./MeetupsItem.module.css";
import FavouritesContext from "../../store/favourites-context";
import { useDeleteMeetup } from "../../hooks/useDeleteMeetup";
import { Link, useLocation } from "react-router-dom";
import AlertX from "../ui/AlertX";
import useToast from "../../hooks/useToast";

function MeetupsItem({ id, title, address, description, onDeletedMeetup }) {
  const { addFavourite, removeFavourite, isItemFavourite } =
    useContext(FavouritesContext);
  const [deleteMeetup, error, deleteIsLoading] = useDeleteMeetup();
  const location = useLocation();
  const isFavouriteAlready = isItemFavourite(id);
  const [alertOpen, setAlertOpen] = useState(false);
  const { toast } = useToast();

  function favouriteToggleHandler() {
    if (isFavouriteAlready) {
      removeFavourite(id);
      toast({ message: "Meetup removed to favourites." });
    } else {
      addFavourite(id);
      toast({ message: "Meetup added from favourites." });
    }
  }

  function deleteMeetupConfirmationHandler() {
    setAlertOpen(true);
  }

  async function deleteMeetupHandler() {
    await deleteMeetup(id);

    if (error === null) {
      removeFavourite(id);
      toast({ message: "Meetup deleted successfully." });
      if (location.pathname === "/") onDeletedMeetup(id);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favouriteToggleHandler} className={classes.action}>
            {isFavouriteAlready
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
          <Link to={`/edit/${id}`} className={classes.action}>
            Edit
          </Link>
          <button
            className={`${classes.delete} ${classes.action}`}
            onClick={deleteMeetupConfirmationHandler}
            disabled={deleteIsLoading}
          >
            Delete
          </button>
        </div>
      </Card>
      <AlertX
        open={alertOpen}
        setOpen={setAlertOpen}
        onConfirm={deleteMeetupHandler}
      />
    </li>
  );
}
export default MeetupsItem;
