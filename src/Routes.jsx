import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])