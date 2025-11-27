import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/home";
import Posts from "./pages/posts";
import FormPage from "./pages/form";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts /> },
      { path: "form", element: <FormPage /> },
    ],
  },
]);

export default router