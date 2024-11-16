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
            <section style={{ position: "relative" }}>
              <section
                className="callbackFormSection"
                style={callbackFormSectionStyle}
              >
                <div
                  className="callbackFormContent"
                  style={callbackFormContentStyle}
                >
                  <CallBackForm />
                  <div className="callbackFormContentPG">
                    <p style={{ fontSize: "3rem", color: "red", fontWeight:"700"}}>
                      Call Us Now !{" "}
                    </p>
                    <a href="tel:02475092784" style={{ textDecoration: "none" }}>
                      <button
                        style={{
                          padding: "10px 20px",
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                          fontWeight: "bolder",
                          borderRadius: "6px",
                        }}
                      >
                        Get In Touch
                      </button>
                    </a>
                  </div>
                </div>
              </section>
              <IoIosCloseCircle
                onClick={() => setIsVisible(false)}
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  position: "absolute",
                  top: "0px",
                  right: "0px",
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

const callbackFormSectionStyle = {
  maxHeight: "100vh", // Limits the height of the section
  overflowY: "auto", // Allows internal scrolling
  padding: "20px",
maxWidth: "1440",
width:'100%',
  borderRadius: "10px",
};

const callbackFormContentStyle = {
  padding: "10px",
  maxHeight: "100%", // Limits the content height to fit inside the section
  overflowY: "auto", // Ensures that when content is long, it scrolls
};

export default Layout;
