import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";
import { ROLES } from "./constants";
import AdminLayout from "./components/layouts/AdminLayout";
import Roles from "./containers/roles/Roles";
import Layout from "./components/layouts/Layout";
import About from "./pages/About";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Thanks from "./pages/Thanks";
import Users from "./containers/users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //errorElement: <NotFound />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "home",
      //   element: <Home />,
      // },
      // { path: "about", element: <About /> },
      // { path: "faqs", element: <FAQS /> },
      // {
      //   path: "Driving-Instructor-Training",
      //   element: <DrivingInstructorTraining />,
      // },
      // {
      //   path: "Driving-Instructor-Franchise",
      //   element: <DrivingInstructorFranchise />,
      // },
      // { path: "Stantard-Check-Test", element: <StantardCheckTest /> },
      // { path: "Driving-Lessons", element: <DrivingLessons /> },
      // { path: "School-Of-Mom-and-Dad", element: <SchoolOfMomDad /> },
      // { path: "Intensive-Driving-Courses", element: <IntensiveCourses /> },
      // { path: "Theory-Support", element: <TheorySupport /> },
      // { path: "ADI-Training-Portal", element: <ADITrainingPortal /> },
      // { path: "Simulated-Driving-Lesson", element: <SimulatedDrivingLesson /> },
      // { path: "Extended-Test", element: <ExtendedTest /> },
      // { path: "Pass-Plus", element: <PassPlus /> },
      // { path: "Ageing-Driver-Support", element: <AgeingDriverSupport /> },
      // { path: "Safe-Road-User-Award", element: <SafeRoadUserAward /> },
      // { path: "Trailer-Training", element: <TrailerTraining /> },
      // { path: "Taxi-Training", element: <TaxiTraining /> },
      // {
      //   path: "Corporate-Responsbilities",
      //   element: <CorporateResponsbilities />,
      // },
      // { path: "Electric-Car-Scheme", element: <ElectricCarScheme /> },
      // { path: "Going-Green-Project", element: <GoingGreenProject /> },
      // { path: "Communities-Champions", element: <CommunitiesChampions /> },
      // { path: "We-Proudly-Support", element: <WeProudlySupport /> },
      // { path: "Go-Cv", element: <GoCv /> },
      // { path: "Our-Office-Green-Efforts", element: <OurOfficeGreenEfforts /> },
      // { path: "The-Honest-Truth", element: <TheHonestTruth /> },
      // { path: "Theory-Subscription", element: <TheorySubscription /> },
      // { path: "Theory-Portal", element: <TheoryPortal /> },
      // { path: "WorkSheets", element: <Worksheet /> },
      // { path: "Personalised-Quiz", element: <PersonalisedQuiz /> },
      // { path: "AIVideos", element: <AIVideos /> },
      // { path: "PracticeMCQS", element: <PracticeMCQS /> },
      // { path: "Contact-Us", element: <Contact /> },
      // { path: "shop", element: <Shop /> },
      // { path: "product/:id", element: <ProductDetails /> },
      // { path: "cart", element: <Cart /> },
      // { path: "hazard-perception", element: <HazardPerception /> },
      // { path: "mcq-Part1", element: <MockTest /> },
      // { path: "my-account", element: <MyAccount /> },
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
    element: <AdminLayout />,
    children: [
      {
        path: "roles",
        element: <Roles />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
