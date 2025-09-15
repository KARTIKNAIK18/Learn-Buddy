import React, { useState } from "react";
import "../styles/SettingsPopup.css";

function SettingsPopup({ isOpen, onClose, onSave }) {
  const [theme, setTheme] = useState("light"); 
  const [fontSize, setFontSize] = useState("medium"); 
  const [highContrast, setHighContrast] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ theme, fontSize, highContrast });
    onClose();
  };

  return (
    <div className="settings-overlay">
      <div className="settings-popup">
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="settings-body">
          {/* Theme */}
          <div className="setting-item">
            <label>Theme:</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Font Size */}
          <div className="setting-item">
            <label>Font Size:</label>
            <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* High Contrast */}
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={() => setHighContrast(!highContrast)}
              />
              High Contrast Mode
            </label>
          </div>
        </div>

        <div className="settings-footer">
          <button className="save-btn"
          type = "button"
           onClick={handleSave}>
            Save</button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPopup;
