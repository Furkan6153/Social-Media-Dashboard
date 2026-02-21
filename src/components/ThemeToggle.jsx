export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="toggle-container" onClick={() => setDarkMode(!darkMode)}>
      <p className="toggle-label">Dark Mode</p>
      <div className={`toggle-bar ${darkMode ? "active" : ""}`}>
        <div className="toggle-ball"></div>
      </div>
    </div>
  );
}
