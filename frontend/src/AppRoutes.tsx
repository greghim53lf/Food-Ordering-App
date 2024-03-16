import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProflePage from "./pages/UserProflePage";
import ProtectedRoute from "./api/ProtectedRoute";
import ManageStorePage from "./pages/ManageStorePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProflePage />
            </Layout>
          }
        />
        <Route
          path="/manage-store"
          element={
            <Layout>
              <ManageStorePage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
