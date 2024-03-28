// import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import DrivingInstructorTraining from "../Pages/Join-our-team/DrivingInstructorTraining"
import DrivingInstructorFranchise from "../Pages/Join-our-team/DrivingInstructorFranchise"
import StantardCheckTest from "../Pages/Join-our-team/StantardCheckTest"
import DrivingLessons from "../Pages/DrivingLessons/DrivingLessons"
import SchoolOfMomDad from "../Pages/DrivingLessons/SchoolOfMomDad"
import IntensiveCourses from "../Pages/IntensiveCourses"
import TheorySupport from "../Pages/TheorySupport"
import ADITrainingPortal from "../Pages/ADITrainingPortal"
import SimulatedDrivingLesson from "../Pages/SpecialityTraining/SimulatedDrivingLesson"
import ExtendedTest from "../Pages/SpecialityTraining/ExtendedTest"
import PassPlus from "../Pages/SpecialityTraining/PassPlus"
import AgeingDriverSupport from "../Pages/SpecialityTraining/AgeingDriverSupport"
import SafeRoadUserAward from "../Pages/SpecialityTraining/SafeRoadUserAward"
import TrailerTraining from "../Pages/SpecialityTraining/TrailerTraining"
import TaxiTraining from "../Pages/SpecialityTraining/TaxiTraining"
import CorporateResponsbilities from "../Pages/CorporateResponsbilites/CorporateResponsbilities"
import ElectricCarScheme from "../Pages/CorporateResponsbilites/ElectricCarScheme"
import GoingGreenProject from "../Pages/CorporateResponsbilites/GoingGreenProject"
import CommunitiesChampions from "../Pages/CorporateResponsbilites/CommunitiesChampions"
import WeProudlySupport from "../Pages/CorporateResponsbilites/WeProudlySupport"
import GoCv from "../Pages/CorporateResponsbilites/GoCv"
import OurOfficeGreenEfforts from "../Pages/CorporateResponsbilites/OurOfficeGreenEfforts"
import TheHonestTruth from "../Pages/CorporateResponsbilites/TheHonestTruth"
import TheorySubscription from "../Pages/Theory-Subscription/TheorySubscription"
import TheoryPortal from "../Pages/Theory-Subscription/TheoryPortal"
import Worksheet from "../Pages/AddOns/Worksheet"
import PersonalisedQuiz from "../Pages/AddOns/PersonalisedQuiz"
import AIVideos from "../Pages/AddOns/AIVideos"
import PracticeMCQS from "../Pages/CheckList/PracticeMCQS"
import Contact from "../Pages/Contact"
import About from "../Pages/About"
import FAQS from "../Pages/FAQS"


import LoginRegister from "../Pages/LoginRegister"



export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/faqs" element={<FAQS/>} />
      <Route path="/Login-Register" element={<LoginRegister/>} />
      
      <Route path="/Driving-Instructor-Training" element={<DrivingInstructorTraining/>} />
      <Route path="/Driving-Instructor-Franchise" element={<DrivingInstructorFranchise/>} />
      <Route path="/Stantard-Check-Test" element={<StantardCheckTest/>} />
      <Route path="/Driving-Lessons" element={<DrivingLessons/>} />
      <Route path="/School-Of-Mom-and-Dad" element={<SchoolOfMomDad/>} />
      <Route path="/Intensive-Driving-Courses" element={<IntensiveCourses/>} />
      <Route path="/Theory-Support" element={<TheorySupport/>} />
      <Route path="/ADI-Training-Portal" element={<ADITrainingPortal/>} />
      <Route path="/Simulated-Driving-Lesson" element={<SimulatedDrivingLesson/>} />
      <Route path="/Extended-Test" element={<ExtendedTest/>} />
      <Route path="/Pass-Plus" element={<PassPlus/>} />
      <Route path="/Ageing-Driver-Support" element={<AgeingDriverSupport/>} />
      <Route path="/Safe-Road-User-Award" element={<SafeRoadUserAward/>} />
      <Route path="/Trailer-Training" element={<TrailerTraining/>} />
      <Route path="/Taxi-Training" element={<TaxiTraining/>} />
      <Route path="/Corporate-Responsbilities" element={<CorporateResponsbilities/>} />
      <Route path="/Electric-Car-Scheme" element={<ElectricCarScheme/>} />
      <Route path="/Going-Green-Project" element={<GoingGreenProject/>} />
      <Route path="/Communities-Champions" element={<CommunitiesChampions/>} />
      <Route path="/We-Proudly-Support" element={<WeProudlySupport/>} />
      <Route path="/Go-Cv" element={<GoCv/>} />
      <Route path="/Our-Office-Green-Efforts" element={<OurOfficeGreenEfforts/>} />
      <Route path="/The-Honest-Truth" element={<TheHonestTruth/>} />
      <Route path="/Theory-Subscription" element={<TheorySubscription/>} />
      <Route path="/Theory-Portal" element={<TheoryPortal/>} />
      <Route path="/WorkSheets" element={<Worksheet/>} />
      <Route path="/Personalised-Quiz" element={<PersonalisedQuiz/>} />
      <Route path="/AIVideos" element={<AIVideos/>} />
      <Route path="/PracticeMCQS" element={<PracticeMCQS/>} />
      <Route path="/Contact-Us" element={<Contact/>} />
    </Routes>
  )
}
