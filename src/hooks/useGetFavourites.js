import { useEffect, useState } from "react";
import FIREBASE_URL from "../config";

export function useGetFavourites() {
  const [favourites, setFavourites] = useState([]);
  const [getFavouritesIsLoading, setGetFavouritesIsLoading] = useState(true);
  const [getFavouritesError, setGetFavouritesError] = useState(null);
  const [response, setResponse] = useState();

  useEffect(() => {
    setGetFavouritesIsLoading(true);
    const url = `${FIREBASE_URL}/favourites.json`;

    async function getFavourites() {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        if (!res.ok) {
          setGetFavouritesError(resJson.error);
        } else if (res.ok) {
          const requestedMeetupsArray = Object.entries(resJson).map(
            (favouriteArray) => favouriteArray[0],
          );
          setFavourites(requestedMeetupsArray);
        }
      } catch (error) {
        console.log("Error: ", error);
        setGetFavouritesError(error);
      } finally {
        setGetFavouritesIsLoading(false);
      }
    }

    getFavourites();
  }, []);

  return [
    favourites,
    setFavourites,
    getFavouritesIsLoading,
    getFavouritesError,
  ];
}
