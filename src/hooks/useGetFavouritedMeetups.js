import { useContext, useEffect, useState } from "react";
import FavouritesContext from "../store/favourites-context";
import FIREBASE_URL from "../config";

export function useGetFavouritedMeetups() {
  const [favouritedMeetups, setFavouritedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favourites } = useContext(FavouritesContext);

  useEffect(() => {
    setIsLoading(true);
    const url = `${FIREBASE_URL}/meetups`;

    async function getFavouritedMeetups() {
      const fetchedFavouritedMeetups = [];
      const failedToFetch = [];

      try {
        await Promise.all(
          favourites.map(async (meetupId) => {
            try {
              const res = await fetch(url + "/" + meetupId + ".json");
              const resJson = await res.json();
              if (!res.ok) {
                failedToFetch.push(meetupId);
                throw new Error(`Failed to fetch ${meetupId}`);
              } else if (res.ok) {
                fetchedFavouritedMeetups.push({ id: meetupId, ...resJson });
              }
            } catch (error) {
              console.log(`Error fetching ${meetupId}:`, error);
            }
          }),
        );
        setFavouritedMeetups(fetchedFavouritedMeetups);
        if (fetchedFavouritedMeetups.length < favourites.length) {
          setError(`Some elements failed to fetch: ${failedToFetch}`);
        }
      } catch (error) {
        console.log("Error: ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getFavouritedMeetups();
  }, [favourites]);

  return [favouritedMeetups, setFavouritedMeetups, isLoading, error];
}
