import React from "react";
import ReactDOM from "react-dom/client";
//import Header from "./components/Header";
//import Body from "./components/Body";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="try again"
        />
      </div>
      <div className="navigation-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restocard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
      />
      <h3>Kiosk Kaffee</h3>
      <h4>Beverages</h4>
      <h4>4.4 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search-Bar">search</div>
      <div className="resto-container">
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
        <Restocard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
