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
import Resume from "./Resume";
import FakeStorePage from "./FakeStorePage";
import { Login } from "../components/fake-store/Login";
import { Register } from "../components/fake-store/Register";
import { MarketPlace } from "../components/fake-store/MarketPlace";
import { User } from "../components/fake-store/User";
import { Checkout } from "../components/fake-store/Checkout";

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
      { path: "resume", element: <Resume /> },
      {
        path: "fake-store",
        element: <FakeStorePage />,
        children: [
          {
            index: true,
            element: <MarketPlace />,
          },
          {
            path: "login",
            element: <Login />,
          },

          {
            path: "register",
            element: <Register />,
          },
          {
            path: "user/:userId",
            element: <User />,
            //loader: "",
          },
          {
            path: "cart/:userId",
            element: <Checkout />,
            //loader: "",
          },
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
