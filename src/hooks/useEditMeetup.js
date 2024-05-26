import { useState } from "react";
import FIREBASE_URL from "../config";

export function useEditMeetup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function editMeetup(meetupData) {
    setError(null);
    setIsLoading(true);

    const url = `${FIREBASE_URL}/meetups/${meetupData.id}.json`;
    const settings = {
      method: "PUT",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
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

  return [editMeetup, error, isLoading];
}
