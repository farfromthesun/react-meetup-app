import { useEffect, useState } from "react";
import FIREBASE_URL from "../config";

export function useGetMeetups() {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState();

  useEffect(() => {
    setIsLoading(true);
    const url = `${FIREBASE_URL}/meetups.json`;

    async function getMeetups() {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        if (!res.ok) {
          setError(resJson.error);
        } else if (res.ok) {
          const requestedMeetupsArray = Object.entries(resJson).map((ele) => ({
            id: ele[0],
            ...ele[1],
          }));
          setMeetups(requestedMeetupsArray);
        }
      } catch (error) {
        console.log("Error: ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMeetups();
  }, []);

  return [meetups, setMeetups, isLoading, error];
}
