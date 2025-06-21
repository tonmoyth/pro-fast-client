import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

// Custom icon (optional)
const deliveryIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const ZoomToDistrict = ({ searchQuery, districts }) => {
  const map = useMap();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const match = districts.find((d) =>
      d.district.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      map.setView([match.latitude, match.longitude], 12);
    }
  }, [searchQuery,districts,map]);

  return null;
};

const Coverage = () => {
  const [districts, setDistricts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load GeoJSON
  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Top Title */}
      <h2 className="text-3xl font-bold text-center">
        We are available in 64 districts
      </h2>

      {/* Search Bar Placeholder */}
      <div className="flex justify-center mt-6">
        <form onSubmit={handleForm}>
          <input
            type="text"
            name="search"
            placeholder="Search your district..."
            className="input input-bordered w-full max-w-md"
          />
          <input type="submit" value="submit" />
        </form>
      </div>

      {/* Divider */}
      <div className="divider my-6">We deliver almost all over Bangladesh</div>

      {/* Map */}
      <div className="h-[600px] w-full mt-6">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-[600px] rounded-xl shadow"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <ZoomToDistrict searchQuery={searchQuery} districts={districts} />

          {districts.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              icon={deliveryIcon}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">{district.district}</h2>
                  <p className="text-sm">Region: {district.region}</p>
                  <p className="text-sm">City: {district.city}</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Areas:</span>{" "}
                    {district.covered_area.join(", ")}
                  </p>
                  <img
                    src={district.flowchart}
                    alt="Flowchart"
                    className="mt-2 rounded"
                    width="100"
                  />
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
