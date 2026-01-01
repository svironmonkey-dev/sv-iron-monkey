import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress console errors in production
if (import.meta.env.PROD) {
  console.error = () => {};
  console.warn = () => {};
}

createRoot(document.getElementById("root")!).render(<App />);
