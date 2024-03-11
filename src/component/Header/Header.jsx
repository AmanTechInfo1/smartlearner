// import React from 'react'
import logo from "../../assets/images/smartlearnerLogo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";



export default function Header() {

const[isNavOpen, setNavOpen] = useState(false);
 
const toggleBar =()=>{
    setNavOpen(!isNavOpen)
}




  const navLinks = [
    {
      path: "/Home",
      display: "Home",
    },
    {
      path: "/",
      display: "Join Our Team",
      dropdownItems: [
        { path: "/team/jobs", display: "Jobs" },
        { path: "/team/benefits", display: "Benefits" },
        { path: "/team/culture", display: "Culture" },
      ],
    },
    {
      path: "/DrivingLessons",
      display: "Driving Lessons",
    },
    {
      path: "/IntensiveCourses",
      display: "Intensive Courses",
    },
    {
        path: "/TheorySupport",
        display: "Theory Support",
      },
    {
      path: "/ADITrainingPortal",
      display: "ADI Training Portal",
    },
    {
      path: "/SpecialityTraining",
      display: "Speciality Training",
    },
    {
      path: "/CorporateResponsibility",
      display: "Corporate Responsibility",
    },
    {
      path: "/TheorySubscription",
      display: "Theory Subscription",
    },
    {
      path: "/",
      display: "Add-Ons",
    },
    {
      path: "/",
      display: "CheckList",
    },
    {
      path: "/Contact",
      display: "Contact",
    },
  ];

  return (
    <div className="header">
    <div id="headermain">
      <nav className="headerContainer">
        <div className="headerlogo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <span id="bar" onClick={toggleBar}>
            <FaBars size={30} />
          </span>
        </div>
        <div className="headerMenu">
          <ul className={isNavOpen ? "open slide-down" : ""} type="None">
            {navLinks.map((link, index) => (
              <li id="headerLinks" key={index}>
                {link.dropdownItems ? (
                  <div className="dropdown">
                    <NavLink to={link.path} className="headerLinks">
                      {link.display}
                    </NavLink>
                    <div className="dropdown-content">
                      
                      {link.dropdownItems.map((item, idx) => (
                        <NavLink to={item.path} key={idx}>
                          {item.display}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink to={link.path} className="headerLinks">
                    {link.display}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>
  );
}
