import { 
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import AuthProvider from "./utils/Auth";
import HomePage from "./protectedRoutes/HomePage";

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
  {
    path: "/users",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      }
    ]
  }
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
