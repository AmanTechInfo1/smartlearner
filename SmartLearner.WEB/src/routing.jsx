import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layouts from "./Layouts/Layouts";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import FAQS from "./Pages/FAQS";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";
import DrivingInstructorTraining from "./Pages/Join-our-team/DrivingInstructorTraining";
import DrivingInstructorFranchise from "./Pages/Join-our-team/DrivingInstructorFranchise";
import StantardCheckTest from "./Pages/Join-our-team/StantardCheckTest";
import DrivingLessons from "./Pages/DrivingLessons/DrivingLessons";
import SchoolOfMomDad from "./Pages/DrivingLessons/SchoolOfMomDad";
import IntensiveCourses from "./Pages/IntensiveCourses";
import TheorySupport from "./Pages/TheorySupport";
import ADITrainingPortal from "./Pages/ADITrainingPortal";
import SimulatedDrivingLesson from "./Pages/SpecialityTraining/SimulatedDrivingLesson";
import ExtendedTest from "./Pages/SpecialityTraining/ExtendedTest";
import PassPlus from "./Pages/SpecialityTraining/PassPlus";
import AgeingDriverSupport from "./Pages/SpecialityTraining/AgeingDriverSupport";
import SafeRoadUserAward from "./Pages/SpecialityTraining/SafeRoadUserAward";
import TrailerTraining from "./Pages/SpecialityTraining/TrailerTraining";
import TaxiTraining from "./Pages/SpecialityTraining/TaxiTraining";
import CorporateResponsbilities from "./Pages/CorporateResponsbilites/CorporateResponsbilities";
import ElectricCarScheme from "./Pages/CorporateResponsbilites/ElectricCarScheme";
import GoingGreenProject from "./Pages/CorporateResponsbilites/GoingGreenProject";
import WeProudlySupport from "./Pages/CorporateResponsbilites/WeProudlySupport";
import CommunitiesChampions from "./Pages/CorporateResponsbilites/CommunitiesChampions";
import GoCv from "./Pages/CorporateResponsbilites/GoCv";
import OurOfficeGreenEfforts from "./Pages/CorporateResponsbilites/OurOfficeGreenEfforts";
import TheHonestTruth from "./Pages/CorporateResponsbilites/TheHonestTruth";
import TheorySubscription from "./Pages/Theory-Subscription/TheorySubscription";
import TheoryPortal from "./Pages/Theory-Subscription/TheoryPortal";
import Worksheet from "./Pages/AddOns/Worksheet";
import PersonalisedQuiz from "./Pages/AddOns/PersonalisedQuiz";
import PracticeMCQS from "./Pages/CheckList/PracticeMCQS";
import AIVideos from "./Pages/AddOns/AIVideos";
import Contact from "./Pages/Contact";
import Shop from "./Pages/shop/Shop";
import ProductDetails from "./Pages/shop/ProductDetails";
import Cart from "./Pages/shop/cart/Cart";
import HazardPerception from "./Pages/Theory-Subscription/Hazard/HazardPerception";
import Thanks from "./Pages/Thanks";
import AdminHome from "./area/admin/AdminHome";
import AdminUsers from "./area/admin/AdminUsers";
import SingleUser from "./area/admin/SingleUser";
import AdminProductPage from "./area/admin/adminProductPage/AdminProductPage";
import AddProductPage from "./area/admin/adminProductPage/AddProductPage";
import RequireAuth from "./component/RequireAuth ";
import { ROLES } from "./constants";
import AdminLayout from "./area/admin/AdminLayout";
import Roles from "./area/admin/roles/Roles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
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
      { path: "Pass-Plus", element: <PassPlus /> },
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
      { path: "Personalised-Quiz", element: <PersonalisedQuiz /> },
      { path: "AIVideos", element: <AIVideos /> },
      { path: "PracticeMCQS", element: <PracticeMCQS /> },
      { path: "Contact-Us", element: <Contact /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "hazard-perception", element: <HazardPerception /> },
    ],
  },

  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "thanks", element: <Thanks /> },

  {
    path: "admin",
    element: (
      <RequireAuth
        allowedRoles={[ROLES.ADMIN]}
        element={<AdminLayout />}></RequireAuth>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminHome />,
      },
      {
        path: "roles",
        element: <Roles />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
      {
        path: "singleuser",
        element: <SingleUser />,
      },
      {
        path: "products",
        element: <AdminProductPage />,
      },
      {
        path: "add-products",
        element: <AddProductPage />,
      },
    ],
  },
]);
