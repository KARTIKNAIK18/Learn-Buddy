import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ onSaveSettings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [highContrast, setHighContrast] = useState(false);

  const handleSave = () => {
    onSaveSettings({ theme, fontSize, highContrast });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">My Learn Buddy</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Small Right-side Settings Panel */}
      <div className={`settings-panel ${isMenuOpen ? "open" : ""}`}>
        <h3>Settings</h3>

        <div className="setting-item">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Font Size:</label>
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={() => setHighContrast(!highContrast)}
            />
            High Contrast
          </label>
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
