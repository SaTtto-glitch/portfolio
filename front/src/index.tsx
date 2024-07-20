import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { topInit } from './js/top.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
);

document.addEventListener('DOMContentLoaded', () => {
    topInit();
});
