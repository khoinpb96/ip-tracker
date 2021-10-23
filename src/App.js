import { useEffect, useState } from "react";
import Input from "./components/Input";
import Title from "./components/Title";
import Result from "./components/Result";
const API_KEY = process.env.REACT_APP_MAP_API_KEY;

export default function App() {
  const [mapData, setMapData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [ipInput, setIpInput] = useState("");

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMapData(data);
        setLocationData(data.location);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [ipInput]);

  const position = [locationData.lat, locationData.lng];

  console.log(position);

  return (
    <>
      <header>
        <Title />
        <Input setIpInput={setIpInput} />
      </header>
      <Result data={mapData} locationData={locationData} />
    </>
  );
}
