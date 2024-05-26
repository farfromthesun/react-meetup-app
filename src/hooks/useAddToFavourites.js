import { useState } from "react";
import FIREBASE_URL from "../config";

export function useAddToFavourites() {
  const [addError, setAddError] = useState(null);
  const [addIsLoading, setAddIsLoading] = useState(false);
  const [response, setResponse] = useState();

  async function addToFavourites(meetupId) {
    setAddError(null);
    setAddIsLoading(true);

    const url = `${FIREBASE_URL}/favourites/${meetupId}.json`;
    const settings = {
      method: "POST",
      body: JSON.stringify(true),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(url, settings);
      const resJson = await res.json();
      if (!res.ok) {
        setAddError(resJson.error);
      }
    } catch (error) {
      console.log("Error: ", error);
      setAddError(error);
    } finally {
      setAddIsLoading(false);
    }
  }

  return [addToFavourites, addError, addIsLoading];
}
