import React from "react";
import ReactDOM from "react-dom";
import {Engagespot} from "@engagespot/react-component";

const theme = {
   notificationButton: {
      iconFill: '#5350f6',
   },
   colors: {
      brandingPrimary: '#5350f6',
      colorSecondary: '#ecebfa',
   },
   feedItem: {
      hoverBackground: '#ecebfa',
   },
   dropdown: {
      hoverBackground: '#ecebfa',
      menuItemHoverBackground: '#ecebfa',
   },
};

ReactDOM.render(
<Engagespot apiKey="ENGAGESPOT_API_KEY" userId="youruser@example.com" theme = {theme} />,
document.body)
