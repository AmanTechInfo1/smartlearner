// import React from "react";
import React from "react";
import stepImg1 from "../../../assets/images/Asset 25@4x.png";
import stepImg2 from "./content2.png";
import stepImg3 from "./content3.png";
import "./HomeDesign.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomeDesign() {
  return (
    <div>
      <div>
        <section className="homecontent-Sec">
          <div className="opicity"></div>
          <div className="home-content-D">
            <h2>
              <span>
                Start Your
                <br />
                Driving <br />
              </span>
              <span id="JourWord">Journey</span>
            </h2>
          </div>
          <div className="content-Imgs">
            <section className="content-Grid">
              {/* /////////////// */}
              <div className="content-box">
                <section className="content-box-header">
                  <h2>Step 1</h2>
                  <img src={stepImg2} />
                </section>
                <section className="content-box-desc">
                  <h2>Apply For Your Provisional Licence</h2>
                  <p>
                    A simple guide to getting your first provisional driving
                    licence
                  </p>
                </section>
                <section className="btn-Section">
                  <a href="https://www.gov.uk/apply-first-provisional-driving-licence">
                    <div className="btn-div">
                      <section>
                        <span>
                          <MdKeyboardArrowRight />
                        </span>
                        <p>Apply Now</p>
                      </section>
                    </div>
                  </a>
                </section>
              </div>
              {/* ////////////////////////////// */}
              <div className="content-box">
                <section className="content-box-header">
                  <h2>Step 2</h2>
                  <img
                    src={stepImg1}
                    style={{ maxWidth: "100px"}}
                  />
                </section>
                <section className="content-box-desc">
                  <h2>Take The Test</h2>
                  <p>Pass your Theory with SmartLearner</p>
                </section>
                <section className="btn-Section">
                  <Link to="/Theory-Support">
                    <div className="btn-div">
                      <section>
                        <span>
                          <MdKeyboardArrowRight />
                        </span>
                        <p>Visit Now</p>
                      </section>
                    </div>
                  </Link>
                </section>
              </div>

              {/* ////////////////////////////// */}
              <div className="content-box">
                <section className="content-box-header">
                  <h2>Step 3</h2>
                  <img
                    src={stepImg3}
                    style={{ maxWidth: "70px", marginTop: "-0.5rem" }}
                  />
                </section>
                <section className="content-box-desc">
                  <h2>Book Lessons</h2>
                  <p>Book your Lessons with Smartlearner</p>
                </section>
                <section className="btn-Section">
                  <Link to="/Driving-Lessons">
                    <div className="btn-div">
                      <section>
                        <span>
                          <MdKeyboardArrowRight />
                        </span>
                        <p>Book Now</p>
                      </section>
                    </div>
                  </Link>
                </section>
              </div>

              {/* ///////////////////////////// */}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

// import "./HomeDesign.css";
// import userIndentification from "../../../assets/images/userIndentification.png";
// import homeUserHand from "../../../assets/images/userHandImg.png";
// import LplateImg from "../../../assets/images/L-Plate.jpg";
// import { Link } from "react-router-dom";
// export default function HomeDesign() {
//   return (
//     <div className="designMain">
//       <div className="designMainContent">
//         <div className="dGrid-content">
//           <div className="flex-Content1">
//             <section className="single-map-block card-1">
//               <div className="img-area">
//                 <div className="number">1</div>
//                 <img
//                   src={userIndentification}
//                   alt=""
//                   width="300"
//                   height="298"
//                 />
//               </div>
//               <div className="content-area">
//                 <h4>Apply for your provisional licence</h4>
//                 <p>
//                   A simple guide to getting your first provisional driving
//                   licence.
//                 </p>
//                 <a href="https://www.gov.uk/apply-first-provisional-driving-licence"> <button className="hBookNowBtn">Apply Now</button></a>
//               </div>
//             </section>
//             <div className="flexdivs"></div>
//           </div>

//           <div className="flex-Content2">
//             <section className="single-map-block card-2">
//               <div className="img-area">
//                 <div className="number">2</div>
//                 <img src={homeUserHand} alt="" width="230" height="298" />
//               </div>
//               <div className="content-area">
//                 <h4> Theory Test </h4>
//                 <p>Pass your Theory Test with SmartLearner</p>
//                 <Link to="/Theory-Support">
//                   <button className="hBookNowBtn">Visit Now</button>
//                 </Link>
//                 {/* <div className="btn-flex">
//                   <a href="">
//                     <img src="./app-store-google.svg" alt="" />
//                   </a>
//                   <a href="">
//                     <img src="./app-store-apple-1.svg" alt="" />
//                   </a>
//                 </div> */}
//               </div>
//             </section>
//             <div className="flexdivs"></div>
//           </div>

//           <div className="flex-Content3">
//             <section className="single-map-block card-3">
//               <div className="img-area">
//                 <div className="number">3</div>
//                 <img src={LplateImg} alt="LplateImg" width="200" height="298" />
//               </div>
//               <div className="content-area">
//                 <h4>Book Lessons</h4>
//                 <p>Book Your lessons with Smartlearner</p>
//                 <Link to='/Driving-Lessons'>
//                   <button className="hBookNowBtn">Book Now</button>
//                 </Link>
//               </div>
//             </section>
//             <div className="flexdivs"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
