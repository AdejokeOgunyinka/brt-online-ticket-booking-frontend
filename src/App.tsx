import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bookings, Components, Dashboard, Profile } from "./pages";
import { SignUp, Login } from "./components";
import { CREATE_ACCOUNT, LOGIN } from "./routes";
import Private from "./routes/PrivateRoute";
import Public from "./routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<Components />} />

        {/* Auth Routes */}

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

        {/* Dashboard Routes */}

        <Route
          path="/"
          element={
            <Private header="Dashboard">
              <Dashboard />
            </Private>
          }
        />

        <Route
          path="/booking"
          element={
            <Private header="Bookings">
              <Bookings />
            </Private>
          }
        />

        <Route
          path="/profile"
          element={
            <Private header="Profile">
              <Profile />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
