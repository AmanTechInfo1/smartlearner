import React, { useEffect, useState, useRef } from "react";
import { useLocation, Outlet } from "react-router-dom";
import LoadingWeb from "../loader/LoadingWeb";
import Navbar from "../header/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Scroll from "../Scroll";
import { useExitIntent } from "use-exit-intent";
import CallBackForm from "../forms/CallBackForm";
import { IoIosCloseCircle } from "react-icons/io";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [webLoading, setWebLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const popupRef = useRef(null);

  const { registerHandler } = useExitIntent();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWebLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const hasPopupShown = sessionStorage.getItem("popupShown");

    if (!hasPopupShown) {
      const handleMouseLeave = () => {
        if (!isVisible) {
          setIsVisible(true);
          sessionStorage.setItem("popupShown", "true");
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="layout">
      {isVisible && (
        <div style={overlayStyle}>
          <div ref={popupRef}>
            <section style={{ display: "flex", gap: "20px" }}>
              <section className="callbackFormSection">
                <div className="callbackFormContent">
                  <CallBackForm />
                  <div className="callbackFormContentPG">
                    <h2>Building knowledge</h2>
                    <p>
                      We launched our 1-2-1 theory sessions in 2019 and since
                      then we have helped many people pass who thought they
                      never could. Our theory sessions focus on building your
                      knowledge from the ground up to ensure you don’t just know
                      the answers but understand them. We have had people from
                      all over the country coming to us looking for help in
                      preparing for their exam. Currently we have a 90% pass
                      rate which is 41.5% higher than the national average!
                    </p>
                  </div>
                </div>
              </section>
              <IoIosCloseCircle
                onClick={() => setIsVisible(false)}
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </section>
          </div>
        </div>
      )}

      {webLoading ? (
        <LoadingWeb />
      ) : (
        <>
          <Navbar />
          {loading ? (
            <LoadingWeb />
          ) : (
            <>
              <Scroll />
              <Header />
              <main>
                <Outlet />
              </main>
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0 0 0 / 82%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const buttonStyle = {
  marginTop: "10px",
  position: "absolute",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

export default Layout;
