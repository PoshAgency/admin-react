import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SimpleReactLightbox from "simple-react-lightbox";
import ThemeContext from "./context/ThemeContext";

const container = document.getElementById("root");

// Create root
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <SimpleReactLightbox>
      <BrowserRouter basename="/react/demo/">
        <ThemeContext>
          <App />
        </ThemeContext>
      </BrowserRouter>
    </SimpleReactLightbox>
  </Provider>
);
