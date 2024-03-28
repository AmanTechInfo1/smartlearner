import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
