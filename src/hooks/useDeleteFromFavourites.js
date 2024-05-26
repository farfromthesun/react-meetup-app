import { useState } from "react";
import FIREBASE_URL from "../config";

export function useDeleteFromFavourites() {
  const [deleteError, setError] = useState(null);
  const [deleteIsLoading, setIsLoading] = useState(false);
  const [deleteResponse, setResponse] = useState();

  async function deleteFromFavourites(meetupId) {
    setError(null);
    setIsLoading(true);

    const url = `${FIREBASE_URL}/favourites/${meetupId}.json`;

    const settings = {
      method: "DELETE",
    };

    try {
      const res = await fetch(url, settings);
      const resJson = await res.json();
      if (!res.ok) {
        setError(resJson.error);
      }
    } catch (error) {
      console.log("Error: ", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return [deleteFromFavourites, deleteError, deleteIsLoading];
}
