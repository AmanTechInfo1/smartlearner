import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layouts/Layout"
// import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQS from "./pages/FAQS";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import DrivingInstructorTraining from "./pages/Join-our-team/DrivingInstructorTraining";
import DrivingInstructorFranchise from "./pages/Join-our-team/DrivingInstructorFranchise";
import StantardCheckTest from "./pages/Join-our-team/StantardCheckTest";
import DrivingLessons from "./pages/DrivingLessons/DrivingLessons";
import SchoolOfMomDad from "./pages/DrivingLessons/SchoolOfMomDad";
import IntensiveCourses from "./pages/IntensiveCourses";
import TheorySupport from "./pages/TheorySupport";
import ADITrainingPortal from "./pages/ADITrainingPortal";
import SimulatedDrivingLesson from "./pages/SpecialityTraining/SimulatedDrivingLesson";
import ExtendedTest from "./pages/SpecialityTraining/ExtendedTest";
import PassPlus from "./pages/SpecialityTraining/PassPlus";
import AgeingDriverSupport from "./pages/SpecialityTraining/AgeingDriverSupport";
import SafeRoadUserAward from "./pages/SpecialityTraining/SafeRoadUserAward";
import TrailerTraining from "./pages/SpecialityTraining/TrailerTraining";
import TaxiTraining from "./pages/SpecialityTraining/TaxiTraining";
import CorporateResponsbilities from "./pages/CorporateResponsbilites/CorporateResponsbilities";
import ElectricCarScheme from "./pages/CorporateResponsbilites/ElectricCarScheme";
import GoingGreenProject from "./pages/CorporateResponsbilites/GoingGreenProject";
import WeProudlySupport from "./pages/CorporateResponsbilites/WeProudlySupport";
import CommunitiesChampions from "./pages/CorporateResponsbilites/CommunitiesChampions";
import GoCv from "./pages/CorporateResponsbilites/GoCv";
import OurOfficeGreenEfforts from "./pages/CorporateResponsbilites/OurOfficeGreenEfforts";
import TheHonestTruth from "./pages/CorporateResponsbilites/TheHonestTruth";
import TheorySubscription from "./pages/Theory-Subscription/TheorySubscription";
import TheoryPortal from "./pages/Theory-Subscription/TheoryPortal";
import Worksheet from "./pages/AddOns/Worksheet";
import PersonalisedQuiz from "./pages/AddOns/PersonalisedQuiz";
import PracticeMCQS from "./pages/CheckList/PracticeMCQS";
import AIVideos from "./pages/AddOns/AIVideos";
import Contact from "./pages/Contact";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/cart/Cart";
import HazardPerception from "./pages/Theory-Subscription/Hazard/HazardPerception";
import Thanks from "./pages/Thanks";

import { ROLES } from "./constants/index";
import RequireAuth from "./utils/RequireAuth";


import MockTest from "./pages/Theory-Subscription/mockTest/MockTest";
import MyAccount from "./pages/auth/myAccount/MyAccount";
import AdminLayout from "./components/layouts/AdminLayout";
import Roles from "./containers/roles/Roles";
import Users from "./containers/users/Users";
import Categories from "./containers/categories/Categories";
import Postcode from "./containers/postcode/Postcode";
import ProductModal from "./containers/productAdmin/ProductModal";
import AdminHome from "./components/admin/AdminHome";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "home",
        element: <Home/>,
      },
      { path: "about", element: <About /> },
      { path: "faqs", element: <FAQS /> },
      {
        path: "Driving-Instructor-Training",
        element: <DrivingInstructorTraining />,
      },
      {
        path: "Driving-Instructor-Franchise",
        element: <DrivingInstructorFranchise />,
      },
      { path: "Stantard-Check-Test", element: <StantardCheckTest /> },
      { path: "Driving-Lessons", element: <DrivingLessons /> },
      { path: "School-Of-Mom-and-Dad", element: <SchoolOfMomDad /> },
      { path: "Intensive-Driving-Courses", element: <IntensiveCourses /> },
      { path: "Theory-Support", element: <TheorySupport /> },
      { path: "ADI-Training-Portal", element: <ADITrainingPortal /> },
      { path: "Simulated-Driving-Lesson", element: <SimulatedDrivingLesson /> },
      { path: "Extended-Test", element: <ExtendedTest /> },
      { path: "Pass-Plus", element:<PassPlus/> },
      { path: "Ageing-Driver-Support", element: <AgeingDriverSupport /> },
      { path: "Safe-Road-User-Award", element: <SafeRoadUserAward /> },
      { path: "Trailer-Training", element: <TrailerTraining /> },
      { path: "Taxi-Training", element: <TaxiTraining /> },
      {
        path: "Corporate-Responsbilities",
        element: <CorporateResponsbilities />,
      },
      { path: "Electric-Car-Scheme", element: <ElectricCarScheme /> },
      { path: "Going-Green-Project", element: <GoingGreenProject /> },
      { path: "Communities-Champions", element: <CommunitiesChampions /> },
      { path: "We-Proudly-Support", element: <WeProudlySupport /> },
      { path: "Go-Cv", element: <GoCv /> },
      { path: "Our-Office-Green-Efforts", element: <OurOfficeGreenEfforts /> },
      { path: "The-Honest-Truth", element: <TheHonestTruth /> },
      { path: "Theory-Subscription", element: <TheorySubscription /> },
      { path: "Theory-Portal", element: <TheoryPortal /> },
      { path: "WorkSheets", element: <Worksheet /> },
      { path: "Personalised-Quiz", element: <PersonalisedQuiz/>  },
      { path: "AIVideos", element: <AIVideos /> },
      { path: "PracticeMCQS", element: <PracticeMCQS/> },
      { path: "Contact-Us", element: <Contact /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "hazard-perception", element: <HazardPerception /> },
      { path: "mcq-Part1", element: <MockTest /> },
      { path: "my-account", element: <MyAccount /> },
    ],
  },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "thanks", element: <Thanks /> },



  {
    path: "admin",
     // element: (
    //     <RequireAuth
    //         allowedRoles={[ROLES.ADMIN]}
    //         element={<AdminLayout />}></RequireAuth>
    // ),
    element: <AdminLayout/>,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminHome/>,
      },
      {
        path: "/admin/roles",
        element: <Roles/> ,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      
      {
        path: "/admin/categories",
        element: <Categories/>,
      },
      {
        path: "/admin/postcodes",
        element:<Postcode/>,
      },
      {
        path: "/admin/products",
        element: <ProductModal/>,
      },
      
    ],
  },
]);