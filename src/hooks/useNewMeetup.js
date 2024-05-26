import { useState } from "react";
import FIREBASE_URL from "../config";

export function useNewMeetup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();

  async function addNewMeetup(meetupData) {
    setError(null);
    setIsLoading(true);

    const url = `${FIREBASE_URL}/meetups.json`;
    const settings = {
      method: "POST",
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

  return [addNewMeetup, error, isLoading];
}
