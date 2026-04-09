import { useEffect, useState } from "react";

export function useFetch(fetcFnct, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchingData, setIsFetchingData] = useState(initialValue);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetcFnct();
        setIsFetchingData(places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch" });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetcFnct]);

  return {
    isFetching,
    error,
    fetchingData,
    setIsFetchingData
  };
}
