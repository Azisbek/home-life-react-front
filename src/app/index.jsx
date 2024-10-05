import { createRoot } from "react-dom/client";
import { CombinedProviders } from "./lib/CombinedProviders.jsx";

createRoot(document.getElementById("root")).render(<CombinedProviders />);
