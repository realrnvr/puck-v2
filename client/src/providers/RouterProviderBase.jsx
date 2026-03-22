import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import App from "../App.jsx";
import Test from "../features/manga/pages/test/Test.jsx";
import MangaDetails from "../features/manga/pages/manga_details/MangaDetails.jsx";
import MangaViwer from "../features/manga/pages/manga_viewer/MangaViwer.jsx";
import LightBoxBase from "../features/manga/viewer/core/lightbox/LightBoxBase.jsx";
import Reproduce from "../features/manga/pages/test/Reproduce.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test/:mangaId/:chapterId/:language",
    element: <LightBoxBase />,
  },
  {
    path: "/test1/:mangaId/:chapterId/:language",
    element: <Test />,
  },
  {
    path: "/reproduce",
    element: <Reproduce />,
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
