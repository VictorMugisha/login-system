import { 
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
]);

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}
