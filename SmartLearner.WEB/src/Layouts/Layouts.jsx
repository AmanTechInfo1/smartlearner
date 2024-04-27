import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import LoadingWeb from "./loaderWeb/LoadingWeb";

export default function Layouts() {
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
          <main>
          <Outlet />
          </main>
            )}
          <Footer />
          </>
        )}
        </>
    
    </div>
  );
}
