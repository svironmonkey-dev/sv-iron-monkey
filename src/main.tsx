import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { languageFromPath, setLanguage } from "./i18n";
import "./index.css";
setLanguage(languageFromPath(window.location.pathname));
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
