import { useEffect, useState } from "react";
import FIREBASE_URL from "../config";

export function useGetSingleMeetup(meetupId) {
  const [meetup, setMeetup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    async function getMeetups() {
      const url = `${FIREBASE_URL}/meetups/${meetupId}.json`;

      try {
        const res = await fetch(url);
        const resJson = await res.json();
        if (!res.ok) {
          setError(resJson.error);
        } else if (res.ok) {
          const wholeMeetup = { id: meetupId, ...resJson };
          setMeetup(wholeMeetup);
        }
      } catch (error) {
        console.log("Error: ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMeetups();
  }, [meetupId]);

  return [meetup, setMeetup, isLoading, error];
}
