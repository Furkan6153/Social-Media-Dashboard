import { useEffect, useState } from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";
import OverviewCard from "./components/OverviewCard";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    fetch("/social-media-dashboard/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="header">
          <div className="header-content">
            <div className="wrapper">
              <h1>Social Media Dashboard</h1>
              <p>
                Total Followers:{" "}
                <span>{data?.totalFollowers?.toLocaleString("en-US")}</span>
              </p>
            </div>

            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        <div className="social-card-list">
          {data?.socialStats?.map((item) => (
            <SocialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="overview-section">
          <h2 className="overview-title">Overview - Today</h2>
          <div className="overview-card-list">
            {data?.overviewToday?.map((item) => (
              <OverviewCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
