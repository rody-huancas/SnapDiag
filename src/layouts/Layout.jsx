import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="xl:w-[1200px] mx-auto my-10">
        {/* Insert content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
