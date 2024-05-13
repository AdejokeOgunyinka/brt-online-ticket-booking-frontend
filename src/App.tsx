import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Components, Dashboard } from "./pages";
import { SignUp, Login } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { CREATE_ACCOUNT, LOGIN } from "./routes";
import Private from "./routes/PrivateRoute";
import Public from "./routes/PublicRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Private header="Dashboard">
                <Dashboard />
              </Private>
            }
          />
          <Route path="/components" element={<Components />} />
          <Route
            path={LOGIN}
            element={
              <Public
                header="Log In"
                description="Welcome back, we've missed you"
              >
                <Login />
              </Public>
            }
          />
          <Route
            path={CREATE_ACCOUNT}
            element={
              <Public
                header="Create Your Account"
                description="Hello There, let's get you started on the My Cowry App"
              >
                <SignUp />
              </Public>
            }
          />
        </Routes>
      </BrowserRouter>
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
