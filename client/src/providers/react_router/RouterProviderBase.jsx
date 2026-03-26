// router.js — move router OUTSIDE any component, accept queryClient as param
import { createBrowserRouter } from "react-router";
import { axiosMangaInstance } from "../../features/manga/api/axios.manga.js";
import { RouterProvider } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

import App from "../../App.jsx";
import Reproduce from "../../features/manga/pages/test/Reproduce.jsx";
import MangaDetails from "../../features/manga/pages/manga_details/MangaDetails.jsx";
import MangaViewer from "../../features/manga/pages/manga_viewer/MangaViewer.jsx";
import Skeleton from "../../features/manga/skeletons/Skeleton.jsx";
import RootErrorBoundary from "../../features/manga/errors/RootErrorBoundary.jsx";

function createRouter(queryClient) {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/viewer/:mangaId/:chapterId/:language",
      HydrateFallback: Skeleton,
      loader: ({ params }) => {
        queryClient.prefetchQuery({
          queryKey: ["chapter_image", params.chapterId],
          queryFn: async () => {
            const response = await axiosMangaInstance.get(
              `/chapter-image/${params.chapterId}`,
            );
            return response.data;
          },
        });
        return null;
      },
      element: <MangaViewer />,
      ErrorBoundary: RootErrorBoundary,
    },
    {
      path: "/reproduce",
      element: <Reproduce />,
    },
    {
      path: "/manga-details/:mangaId",
      element: <MangaDetails />,
    },
  ]);
}

function RouterProviderBase() {
  const queryClient = useQueryClient();

  const router = useMemo(() => createRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
}

export default RouterProviderBase;
