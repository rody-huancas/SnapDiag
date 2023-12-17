import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
