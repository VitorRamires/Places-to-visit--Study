import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablesPlaces, setAvailablesPlaces] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("http://localhost:3000/places");
      const data = await response.json();
      setAvailablesPlaces(data.places);
    }

    handleFetch();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablesPlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
