import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [currLocation, setCurrLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };

  const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#666",
  };

  const mediaQueryStyle = {
    "@media (max-width: 768px)": {
      padding: "10px", 
      fontSize: "24px", 
      backgroundColor:"none"
    },
    
  };

  
  const mergedContainerStyle = { ...containerStyle, ...mediaQueryStyle };

  return (
    <div style={mergedContainerStyle}>
      <h1 style={headingStyle}>Current Location</h1>
      <p style={paragraphStyle}>Latitude: {currLocation.latitude}</p>
      <p style={paragraphStyle}>Longitude: {currLocation.longitude}</p>
      <p style={paragraphStyle}>City: {currLocation.city}</p>
    </div>
  );
}

export default App;
