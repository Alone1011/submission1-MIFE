import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Gunakan environment variabel
  const API_KEY = "de6cb1b9ee71b1923d156e410dcea3ba";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("Kota tidak ditemukan");

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Di dalam return statement
    <div className="weather-app">
      <h1 style={{ marginBottom: "1rem", color: "#1a1a1a" }}>🌤️ Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="error">⚠️ {error}</p>}

      {weatherData && (
        <div className="weather-result">
          <div className="main-info">
            <h2
              style={{
                margin: "0 0 1rem",
                fontSize: "2rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
              }}
            >
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt="Weather icon"
                style={{ width: "100px", height: "100px" }}
              />
              <div>
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {Math.round(weatherData.main.temp)}°C
                </div>
                <p
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1.2rem",
                    color: "#666",
                  }}
                >
                  {weatherData.weather[0].description}
                </p>
              </div>
            </div>
          </div>

          <div className="details">
            <div>
              <p style={{ margin: "0.5rem 0", color: "#444" }}>💧 Kelembapan</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {weatherData.main.humidity}%
              </p>
            </div>
            <div>
              <p style={{ margin: "0.5rem 0", color: "#444" }}>🌡️ Feels Like</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {Math.round(weatherData.main.feels_like)}°C
              </p>
            </div>
            <div>
              <p style={{ margin: "0.5rem 0", color: "#444" }}>🌬️ Angin</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {weatherData.wind.speed} m/s
              </p>
            </div>
            <div>
              <p style={{ margin: "0.5rem 0", color: "#444" }}>📊 Tekanan</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
