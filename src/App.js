import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import MainPage from "./Pages/MainPage";
import OuletPage from "./Pages/OutletPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OuletPage />}>
      <Route index element={<AuthPage />} />
      <Route path="/rethink" element={<MainPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
