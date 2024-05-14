import { Navigate } from "react-router-dom";
import { LOGIN } from ".";
import { DashboardLayout } from "../layouts";

const Private = ({ children, header }: { children: any; header: string }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={LOGIN} replace />;
  }

  return <DashboardLayout header={header}>{children}</DashboardLayout>;
};

export default Private;
