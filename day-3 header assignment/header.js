import React from "react";
import ReactDOM from "react-dom/client";
import "./header.css";

const Header = () => {
    return (
      <header>
        <nav>
          <img src="./public/icon.png" alt="Logo" className="img-logo" />
          <input type="text" className="input" placeholder="Type something..." />
          <img src="./public/profile.png" alt="profile-icon" className="img-profile" />
        </nav>
      </header>
    );
};  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);