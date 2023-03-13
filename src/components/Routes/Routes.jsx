import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CharacterPage from "../../pages/CharacterPage/CharacterPage";
import PublicRoute from "../PublicRoute/PublicRoute";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export default function RoutesPages() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Route>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}
