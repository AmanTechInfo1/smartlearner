// import React from 'react'
import logo from "../../assets/images/smartlearnerLogo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleBar = () => {
    setNavOpen(!isNavOpen);
  };

  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {

      display: "Join Our Team",
      active: false,
      dropdownItems: [
        {
          path: "/Driving-Instructor-Training",
          display: "Driving Instructor Training",
        },
        {
          path: "/Driving-Instructor-Franchise",
          display: "Driving Instructor Franchise",
        },
        { path: "/Stantard-Check-Test", display: "Stantard CheckTest" },
      ],
    },
    {
      path: "/Driving-Lessons",
      display: "Driving Lessons",
      active: false,
      dropdownItems: [
        {
          path: "/School-Of-Mom-and-Dad",
          display: "School Of Mom & Dad",
        },
      ],
    },
    {
      path: "/Intensive-Driving-Courses",
      display: "Intensive Courses",
    },
    {
      path: "/Theory-Support",
      display: "Theory Support",
    },
    {
      path: "/ADI-Training-Portal",
      display: "ADI Training Portal",
    },
    {

      display: "Speciality Training",
      active: false,
      dropdownItems: [
        { path: "/Simulated-Driving-Lesson", display: "Simulated Driving Lesson" },
        { path: "/Extended-Test", display: "Extended Test" },
        { path: "/Pass-Plus", display: "Pass Plus" },
        { path: "/Ageing-Driver-Support", display: "Ageing Driver Support" },
        { path: "/Safe-Road-User-Award", display: "Safe Road User Award" },
        { path: "/Trailer-Training", display: "Trailer Training" },
        { path: "/Taxi-Training", display: "Taxi-Training" },
      ],
    },
    {
      path: "/Corporate-Responsbilities",
      display: "Corporate Responsibility",

      dropdownItems: [
        { path: "/Electric-Car-Scheme", display: "Electric Car Scheme" },
        { path: "/Going-Green-Project", display: "Going Green Project" },
        { path: "/Communities-Champions", display: "Communities Champions" },
        { path: "/We-Proudly-Support", display: "We Proudly Support" },
        { path: "/Go-Cv", display: "Go Cv" },
        { path: "/Our-Office-Green-Efforts", display: "Our Office Green Efforts" },
        { path: "/The-Honest-Truth", display: "The Honest Truth" },
      ],
    },
    {
      path: "/Theory-Subscription",
      display: "Theory Subscription",
      dropdownItems: [
        { path: "/Theory-Portal", display: "Theory Portal" },

      ],
    },
    {

      display: "Add-Ons",
      active: false,
      dropdownItems: [
        { path: "/AIVideos", display: "AI-Videos" },
        { path: "/Personalised-Quiz", display: "Personalised-Quiz" },
        { path: "/WorkSheets", display: "Worksheet" },
      ],
    },
    {

      display: "CheckList",
      active: false,
      dropdownItems: [{ path: "/PracticeMCQS", display: "Practice-MCQS" }],
    },
    {
      path: "/Contact-Us",
      display: "Contact",
    },
  ];

  return (
    <div className="header">
      <div id="headermain">
        <nav className="headerContainer">
          <div className="headerlogo">
            <a href="https://smartlearner.com">
              <img src={logo} alt="smartlearnerLogo" />
            </a>
            <span id="bar" onClick={toggleBar}>
              <FaBars size={30} />
            </span>
          </div>
          <div className="headerMenu">
            <ul
              className={isNavOpen ? "open slide-down" : ""}
              type="None"
              id="mainMenu"
            >
              {navLinks.map((link, index) => (
                <li id="headerLinks" key={index}>
                  {link.dropdownItems ? (
                    <div className="dropdown">
                      <NavLink
                        to={link.path}
                        className={`headerlinks ${link.active ? "/" : "inactive"
                          }`}
                      >
                        {link.display}
                      </NavLink>
                      <div className="dropdown-content">
                        <ul className="subMenu">
                          <li id="subMenuList">
                            {link.dropdownItems.map((item, idx) => (
                              <NavLink
                                to={item.path}
                                key={idx}
                                id="dropdown-content"
                              >
                                {item.display}
                              </NavLink>
                            ))}
                          </li>
                        </ul>
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
