import React from "react";
import "./HomeDesign.css";
import userIndentification from "../../../assets/images/userIndentification.png";
import homeUserHand from "../../../assets/images/userHandImg.png";
import LplateImg from "../../../assets/images/L-Plate.jpg";
import { Link } from "react-router-dom";
export default function HomeDesign() {
  return (
    <div className="designMain">
      <div className="designMainContent">
        <div className="dGrid-content">
          <div className="flex-Content1">
            <section className="single-map-block card-1">
              <div className="img-area">
                <div className="number">1</div>
                <img
                  src={userIndentification}
                  alt=""
                  width="300"
                  height="298"
                />
              </div>
              <div className="content-area">
                <h4>Apply for your provisional licence</h4>
                <p>
                  A simple guide to getting your first provisional driving
                  licence.
                </p>
                <a href="https://www.gov.uk/apply-first-provisional-driving-licence"> <button className="hBookNowBtn">Apply Now</button></a>
              </div>
            </section>
            <div className="flexdivs"></div>
          </div>

          <div className="flex-Content2">
            <section className="single-map-block card-2">
              <div className="img-area">
                <div className="number">2</div>
                <img src={homeUserHand} alt="" width="230" height="298" />
              </div>
              <div className="content-area">
                <h4> Theory Test </h4>
                <p>Pass your Theory Test with SmartLearner</p>
                <Link to="/Theory-Support">
                  <button className="hBookNowBtn">Visit Now</button>
                </Link>
                {/* <div className="btn-flex">
                  <a href="">
                    <img src="./app-store-google.svg" alt="" />
                  </a>
                  <a href="">
                    <img src="./app-store-apple-1.svg" alt="" />
                  </a>
                </div> */}
              </div>
            </section>
            <div className="flexdivs"></div>
          </div>

          <div className="flex-Content3">
            <section className="single-map-block card-3">
              <div className="img-area">
                <div className="number">3</div>
                <img src={LplateImg} alt="LplateImg" width="200" height="298" />
              </div>
              <div className="content-area">
                <h4>Book Lessons</h4>
                <p>Book Your lessons with Smartlearner</p>
                <Link to='/Driving-Lessons'>
                  <button className="hBookNowBtn">Book Now</button>
                </Link>
              </div>
            </section>
            <div className="flexdivs"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
