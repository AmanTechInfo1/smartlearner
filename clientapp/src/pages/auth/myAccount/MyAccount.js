import React from "react";
import profileImg from "../../../assets/images/car-red.png";
import MyOrders from "../../shop/myOrders/MyOrders";
import { Link } from "react-router-dom";

export default function MyAccount() {
  return (
    <div
      style={{
        backgroundColor: "black",
        fontFamily: "'Antonio', sans-serif",
        color: "white",
      }}
    >
      <h2 style={{ color: "red", fontSize: "3rem", textAlign: "center" }}>
        MyAccount
      </h2>
      <div
        className="d-flex flex-column flex-md-row   rounded shadow-lg"
        style={{ backgroundColor: "black", gap: "30px", padding: "5rem 2rem" }}
      >
        <div
          className="d-flex flex-column align-items-center bg-dark p-4 rounded shadow-md w-100 w-md-33"
          style={{ justifyContent: "center" }}
        >
          <img
            style={{ maxWidth: "200px", width: "100%", height: "100px" }}
            src={profileImg}
            alt="Profile Picture"
            className="rounded-circle mb-4"
          />
          <h2 className="h5 font-weight-semibold text-danger">John Doe</h2>
          <p className="text-white">Full Stack Developer</p>
          <p className="text-white">Bay Area, San Francisco, CA</p>
        </div>
        <div className="d-flex flex-column bg-dark p-4 rounded shadow-md w-100 w-md-67 mt-4 mt-md-0 ml-md-4">
          <div className="d-flex justify-content-between mb-4">
            <span className="font-weight-semibold text-danger">Full Name</span>
            <span>Kenneth Valdez</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span className="font-weight-semibold text-danger">Email</span>
            <span>fip@jukmuh.al</span>
          </div>

          <div className="d-flex justify-content-between mb-4">
            <span className="font-weight-semibold text-danger">Mobile</span>
            <span>(320) 380-4539</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span className="font-weight-semibold text-danger">Address</span>
            <span>Bay Area, San Francisco, CA</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span className="font-weight-semibold text-danger">
              Subscription
            </span>
            <span>current</span>
          </div>
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            {" "}
            <button className="btn btn-info text-white align-self-start">
              ForgotPassword
            </button>
          </Link>
        </div>
      </div>

      <MyOrders />
    </div>
  );
}
