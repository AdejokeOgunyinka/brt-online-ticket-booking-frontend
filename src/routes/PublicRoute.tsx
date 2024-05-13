import { Navigate } from "react-router-dom";
import { DASHBOARD } from ".";
import { AuthLayout } from "../layouts";

const Public = ({
  children,
  header,
  description,
}: {
  children: any;
  header: string;
  description: string;
}) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    return <Navigate to={DASHBOARD} replace />;
  }
  return (
    <AuthLayout header={header} description={description}>
      {children}
    </AuthLayout>
  );
};

export default Public;
