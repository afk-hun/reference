import Header from "../components/landing/Header";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RickAndMortyPage from "./RickAndMortyPage";
import Characters from "../components/rick-and-morty/Characters/Characters";
import Episodes from "../components/rick-and-morty/Episodes/Episodes";
import Locations from "../components/rick-and-morty/Locations/Locations";
import Landing from "../components/landing/Landing";

const mainRouterConfig = [
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "", element: <Landing /> },
      {
        path: "rick-and-morty",
        element: <RickAndMortyPage />,
        children: [
          { path: "characters", element: <Characters /> },
          { path: "locations", element: <Locations /> },
          { path: "episodes", element: <Episodes /> },
        ],
      },
    ],
  },
] as RouteObject[];

export default function LandingPage() {
  const router = createBrowserRouter(mainRouterConfig);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
