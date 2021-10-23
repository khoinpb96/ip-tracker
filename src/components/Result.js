import "./Result.scss";
export default function Result({ data, locationData }) {
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
