import { useState } from "react";
import FIREBASE_URL from "../config";

export function useDeleteMeetup() {
  const [error, setError] = useState(null);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [response, setResponse] = useState();

  async function deleteMeetup(meetupId) {
    setError(null);
    setDeleteIsLoading(true);

    const url = `${FIREBASE_URL}/meetups/${meetupId}.json`;

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
      setDeleteIsLoading(false);
    }
  }

  return [deleteMeetup, error, deleteIsLoading];
}
