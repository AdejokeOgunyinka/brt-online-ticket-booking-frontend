import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Components, Dashboard } from "./pages";
import { AuthLayout, DashboardLayout } from "./layouts";
import { SignUp, Login } from "./components";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/components",
    element: <Components />,
  },
  {
    path: "/auth/create-account",
    element: (
      <AuthLayout
        header="Create Your Account"
        description="Hello There, let's get you started on the My Cowry App"
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
  {
    path: "/",
    element: (
      <AuthLayout header="Log In" description="Welcome back, we've missed you">
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout header="Dashboard">
        <Dashboard />
      </DashboardLayout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
