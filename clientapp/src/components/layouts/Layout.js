import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import Navbar from "../header/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Scroll from "../Scroll";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [webLoading, setwebLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setwebLoading(false);
    }, 1000);

    return () => clearTimeout(timeout2);
  }, []);

  return (
    <>
      <div className="layout">
        <>
          {webLoading ? (
            <LoadingWeb />
          ) : (
            <>
              <Navbar />
              <Header />
              {loading ? (
                <LoadingWeb />
              ) : (
                <>
                <Scroll/>
                  <main>
                    <Outlet />
                  </main>
                  <Footer />
                </>
              )}
            </>
          )}
        </>
      </div>
    </>
  );
}

export default Layout;
