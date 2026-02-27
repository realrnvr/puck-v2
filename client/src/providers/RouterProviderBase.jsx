import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import App from "../App.jsx";
import MangaDetailsPage from "../features/manga/pages/manga_details/MangaDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/manga-details",
    element: <MangaDetailsPage />,
  },
]);

function RouterProviderBase() {
  return <RouterProvider router={router} />;
}

export default RouterProviderBase;
