import {createRoot} from "react-dom/client";
import App from "./App";

const root = document.getElementById(<App />);

createRoot(root).render(<h1>hello world</h1>);

// That error happens because browsers don’t know how to directly handle 
// text/jsx — they onlysupport standard JavaScript MIME types like 
// text/javascript or application/javascript.

// Switch to Vite/Webpack

// This is the real solution for anything serious:

// Compiles JSX into vanila js

// Need bundler to compile the jsx in to vanila js

// A bundler like Vite, Webpack, or Parcel compiles your JSX 
// into plain JavaScript on your machine (server/dev side) 
// before sending to the browser.