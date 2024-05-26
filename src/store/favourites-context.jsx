import { createContext, useState } from "react";
import { useAddToFavourites } from "../hooks/useAddToFavourites";
import { useGetFavourites } from "../hooks/useGetFavourites";
import { useDeleteFromFavourites } from "../hooks/useDeleteFromFavourites";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetupId) => {},
  removeFavourite: (meetupId) => {},
  isItemFavourite: (meetupId) => {},
});

export function FavouritesContextProvider({ children }) {
  const [
    favourites,
    setFavourites,
    getFavouritesIsLoading,
    getFavouritesError,
  ] = useGetFavourites();
  const [addToFavourites, addError, addIsLoading] = useAddToFavourites();
  const [deleteFromFavourites, deleteError, deleteIsLoading] =
    useDeleteFromFavourites();

  function addFavouriteHandler(meetupId) {
    addToFavourites(meetupId);
    if (addError === null) {
      setFavourites((prevFavourites) => [...prevFavourites, meetupId]);
    }
  }

  function removeFavouriteHandler(meetupId) {
    deleteFromFavourites(meetupId);
    if (deleteError === null) {
      setFavourites((prevFavourites) =>
        prevFavourites.filter((ele) => ele !== meetupId),
      );
    }
  }

  function isItemFavouriteHandler(meetupId) {
    return favourites.includes(meetupId);
  }

  const context = {
    favourites: favourites,
    totalFavourites: favourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    isItemFavourite: isItemFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
