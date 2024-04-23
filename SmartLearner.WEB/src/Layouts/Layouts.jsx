import { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import LoadingWeb from "./loaderWeb/LoadingWeb";


export default function Layouts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="layout">
    {loading ? (
     <LoadingWeb/>
    ) : (
      <>
        <Navbar />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )}
  </div>
  )
}
