import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import App from "../App.jsx";
import MangaDetailsPage from "../features/manga/pages/manga_details/MangaDetailsPage.jsx";
import Test from "../features/manga/pages/test/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/manga-details/:mangaId",
    element: <MangaDetailsPage />,
  },
  {
    path: "/test/:mangaId",
    element: <Test />,
  },
]);

function RouterProviderBase() {
  return <RouterProvider router={router} />;
}

export default RouterProviderBase;
