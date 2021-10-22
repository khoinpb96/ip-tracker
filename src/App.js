import { useEffect, useState } from "react";
import arrow from "./image/icon-arrow.svg";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.REACT_APP_MAP_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

function App() {
  const [ipData, setIpData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [ipInput, setIpInput] = useState("");

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIpData(data);
        setLocationData(data.location);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [ipInput]);

  return (
    <>
      <Header setIpInput={setIpInput} />
      <Result data={ipData} locationData={locationData} />
    </>
  );
}

export default App;

function Header({ setIpInput }) {
  return (
    <header>
      <Title />
      <Input setIpInput={setIpInput} />
    </header>
  );
}

function Title() {
  return <h1 className="title">IP Address Tracker</h1>;
}

function Input({ setIpInput }) {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setIpInput(inputValue);
  }

  return (
    <form className="input" onSubmit={submitHandler}>
      <input
        type="text"
        id="url"
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div className="enterBtn" onClick={submitHandler}>
        <img src={arrow} alt="" />
      </div>
    </form>
  );
}

function Result({ data, locationData }) {
  return (
    <div className="result">
      <div>
        <span>IP Address</span>
        <p>{data.ip}</p>
      </div>

      <div>
        <span>Location</span>
        <p>
          {locationData.region && locationData.country
            ? `${locationData.region}, ${locationData.country}`
            : ""}
        </p>
      </div>

      <div>
        <span>Timezone</span>
        <p>{locationData.timezone && `UTC ${locationData.timezone}`}</p>
      </div>

      <div>
        <span>ISP</span>
        <p>{data.isp}</p>
      </div>
    </div>
  );
}
