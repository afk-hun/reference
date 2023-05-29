import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";
import LandingPage from "./pages/LandingPage";
import { CARDS } from "./utils/consts";

// TODO: layz load needed for pages excep cards without page


const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
]

CARDS.map( (item) => { return routes.push({ path: item.path, element: item.element }) } )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    //errorElement: todo 
    children: routes,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
