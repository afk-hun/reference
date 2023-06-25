import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RootPage from "./pages/RootPage";
import LandingPage from "./pages/LandingPage";
import { CARDS } from "./utils/consts";
import { Provider } from "react-redux";
import { store } from "./app/store";

// TODO: layz load needed for pages excep cards without page


const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
]

CARDS.map( (item) => { return routes.push({ path: item.path, element: item.page }) } )

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
