import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./themes/AppLayout";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  );
}

export default App;
