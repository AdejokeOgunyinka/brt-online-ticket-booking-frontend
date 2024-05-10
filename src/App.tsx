import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Components } from "./pages";
import { AuthLayout } from "./layouts";
import { SignUp, Login } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Components />,
  },
  {
    path: "/auth/create-account",
    element: (
      <AuthLayout
        header="Create Your Account"
        description="Let's get started with your free starter plan in 30 days"
      >
        <SignUp />
      </AuthLayout>
    ),
  },
  {
    path: "/auth/login",
    element: (
      <AuthLayout header="Log In" description="Welcome back, we've missed you">
        <Login />
      </AuthLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
