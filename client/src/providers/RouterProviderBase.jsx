import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import App from "../App.jsx";
import Test from "../features/manga/pages/test/Test.jsx";
import MangaDetails from "../features/manga/pages/manga_details/MangaDetails.jsx";
import MangaViwer from "../features/manga/pages/manga_viewer/MangaViwer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test/:mangaId/:chapterId/:language",
    element: <Test />,
  },
  {
    path: "/manga-details/:mangaId",
    element: <MangaDetails />,
  },
  {
    path: "/chapter/:chapterId",
    element: <MangaViwer />,
  },
]);

function RouterProviderBase() {
  return <RouterProvider router={router} />;
}

export default RouterProviderBase;
