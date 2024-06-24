import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layouts/Layout";
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
import Area from "./containers/productArea/Area";
import QuizCategory from "./containers/quiz/quizCategory/QuizCategory";
import QuizzesModal from "./containers/quiz/QuizzesModal";
import EditQuizModal from "./containers/quiz/component/EditQuizModal";
import QuizModal from "./containers/quiz/quiz/QuizModal";
import Quiz from "./components/takequizes/Quiz";
import QuizResult from "./components/takequizes/QuizResult";
import QuizModule from "./containers/quiz/quizModule/QuizModule";
import QuizUModule from "./containers/quiz/quizUModule/QuizUModule";
import QuizCategoryHome from "./components/takequizes/QuizCategoryHome";
import QuizModuleHome from "./components/takequizes/QuizModuleHome";
import Checkout from "./pages/shop/checkout/Checkout";
import OrderInvoice from "./containers/orders/component/OrderInvoice";
import Order from "./containers/orders/Order";
import Products from "./pages/Product";
import MyCart from "./pages/auth/MyCart";
import AdiPartOne from "./pages/adiPages/AdiPartOne";
import RoadProcedureBand from "./pages/adiPages/bands/RoadProcedureBand";
import TrafficSignalBand from "./pages/adiPages/bands/TrafficSignalBand";
import DDTLawBand from "./pages/adiPages/bands/DDTLawBand";
import PublicationTechBand from "./pages/adiPages/bands/PublicationTechBand";
import MockTestBand from "./pages/adiPages/bands/MockTestBand";
import AdiPartTwo from "./pages/adiPages/adi-part2/AdiPartTwo";
import AdiPartThree from "./pages/adiPages/adi-part3/AdiPartThree";
import GdeMatrix from "./pages/adiPages/adi-part3/internalPages/GdeMatrix";
import StandardCheckSheet from "./pages/adiPages/adi-part3/internalPages/StandardCheckSheet";
import LearningStyles from "./pages/adiPages/adi-part3/internalPages/LearningStyles";
import SmartTargets from "./pages/adiPages/adi-part3/internalPages/SmartTargets";
import LessonPlanning from "./pages/adiPages/adi-part3/internalPages/LessonPlanning";
import RiskManagement from "./pages/adiPages/adi-part3/internalPages/RiskManagement";
import QuestioningTech from "./pages/adiPages/adi-part3/internalPages/QuestioningTech";
import InstructionFeedBack from "./pages/adiPages/adi-part3/internalPages/InstructionFeedBack";
import LessonLayouts from "./pages/adiPages/adi-part3/internalPages/LessonLayouts";
import TrainingVideos from "./pages/adiPages/adi-part3/internalPages/TrainingVideos";
import StartingOnRoad from "./pages/adiPages/adi-part3/internalPages/StartingOnRoad";
import Alertness from "./pages/Theory-Subscription/practice-multiple-ways/Alertness";
import Attitude from "./pages/Theory-Subscription/practice-multiple-ways/Attitude";
import SafetyVehicle from "./pages/Theory-Subscription/practice-multiple-ways/SafetyVehicle";
import SafetyMargins from "./pages/Theory-Subscription/practice-multiple-ways/SafetyMargins";
import HazzardAwareness from "./pages/Theory-Subscription/practice-multiple-ways/HazzardAwareness";
import VulnerableRoadUser from "./pages/Theory-Subscription/practice-multiple-ways/VulnerableRoadUser";
import OtherVehicle from "./pages/Theory-Subscription/practice-multiple-ways/OtherVehicle";
import VehicleHandling from "./pages/Theory-Subscription/practice-multiple-ways/VehicleHandling";
import MotorwayRules from "./pages/Theory-Subscription/practice-multiple-ways/MotorwayRules";
import RulesOfRoad from "./pages/Theory-Subscription/practice-multiple-ways/RulesOfRoad";
import RoadTraffic from "./pages/Theory-Subscription/practice-multiple-ways/RoadTraffic";
import EssentialDocuments from "./pages/Theory-Subscription/practice-multiple-ways/EssentialDocuments";
import IncidentsAccidents from "./pages/Theory-Subscription/practice-multiple-ways/IncidentsAccidents";
import VehicleLoading from "./pages/Theory-Subscription/practice-multiple-ways/VehicleLoading";
import PaymentProcessing from "./pages/shop/checkout/PaymentProcessing";
import PaymentSuccess from "./pages/PaymentSuccess";
import MyOrders from "./pages/shop/myOrders/MyOrders";
import ProductSpecialModal from "./containers/productSpecial/ProductSpecialModal";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      { path: "Driving-Lessons/:section?", element: <DrivingLessons /> },
      { path: "School-Of-Mom-and-Dad", element: <SchoolOfMomDad /> },
      { path: "Intensive-Driving-Courses", element: <IntensiveCourses /> },
      { path: "Products", element: <Products /> },
      { path: "Theory-Support/:section?", element: <TheorySupport /> },
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
      { path: "paymentSuccess", element: <PaymentSuccess /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "my-orders", element: <MyOrders /> },
      { path: "hazard-perception", element: <HazardPerception /> },
      { path: "mcq-Part1", element: <MockTest /> },
      { path: "my-account", element: <MyAccount /> },
      { path: "checkout", element: <Checkout /> },
      { path: "adi-part-one", element: <AdiPartOne /> },
      { path: "band-1-Road-Procedure", element: <RoadProcedureBand /> },
      {
        path: "band-2-traffic-signs-and-signals",
        element: <TrafficSignalBand />,
      },
      {
        path: "band-3-driving-tests-disabilities-and-the-law",
        element: <DDTLawBand />,
      },
      {
        path: "band-4-publications-techniques",
        element: <PublicationTechBand />,
      },
      { path: "Adi-part-1-MockTest", element: <MockTestBand /> },
      { path: "adi-part-2", element: <AdiPartTwo /> },
      { path: "adi-part-3", element: <AdiPartThree /> },
      { path: "gde-matrix", element: <GdeMatrix /> },
      { path: "standards-check-sheet", element: <StandardCheckSheet /> },
      { path: "learning-styles", element: <LearningStyles /> },
      { path: "smart-targets", element: <SmartTargets /> },
      { path: "lesson-plannings", element: <LessonPlanning /> },
      { path: "risk-management", element: <RiskManagement /> },
      { path: "question-techniques", element: <QuestioningTech /> },
      { path: "instruction-and-feedback", element: <InstructionFeedBack /> },
      { path: "lesson-plan-layouts", element: <LessonLayouts /> },
      { path: "training-videos", element: <TrainingVideos /> },
      { path: "starting-on-road", element: <StartingOnRoad /> },
      { path: "alertness", element: <Alertness /> },
      { path: "attitude", element: <Attitude /> },
      { path: "safety-your-vehicle", element: <SafetyVehicle /> },
      { path: "safety-margins", element: <SafetyMargins /> },
      { path: "hazard-awareness", element: <HazzardAwareness /> },
      { path: "vulnerable-road-users", element: <VulnerableRoadUser /> },
      { path: "other-vehicles", element: <OtherVehicle /> },
      { path: "vehicle-handling", element: <VehicleHandling /> },
      { path: "motorway-rules", element: <MotorwayRules /> },
      { path: "rules-of-road", element: <RulesOfRoad /> },
      { path: "road-and-traffic-signs", element: <RoadTraffic /> },
      { path: "essential-Documents", element: <EssentialDocuments /> },
      { path: "incidents-&-accidents", element: <IncidentsAccidents /> },
      { path: "vehicle-loading", element: <VehicleHandling /> },
      { path: "video-clips", element: <VehicleLoading /> },
      {path:"checkout", element: <Checkout/>},
      {path:"paymentProcessing", element: <PaymentProcessing/>},
      
      {
        path: "/quizModuleId/:id",
        element: <QuizModuleHome />,
      },
      {
        path: "/quizCategoryHome",
        element: <QuizCategoryHome />,
      },{
        path: "/quizGive",
        element: <QuizCategoryHome />,
      },
      {
        path: "/takequiz/:cid/:id",
        element: <Quiz />,
      },
      {
        path: "/takequiz/:cid",
        element: <Quiz />,
      },
      {
        path: "/quizResult",
        element: <QuizResult />,
      },

    ],
  },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
  { path: "MyCart", element: <MyCart /> },
  { path: "thanks", element: <Thanks /> },

  {
    path: "admin",
    element: (
      <RequireAuth
        allowedRoles={[ROLES.ADMIN]}
        element={<AdminLayout />}
      ></RequireAuth>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminHome />,
      },
    
      {
        path: "/admin/roles",
        element: <Roles />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },

      {
        path: "/admin/categories",
        element: <Categories />,
      },
      {
        path: "/admin/postcodes",
        element: <Postcode />,
      },
      {
        path: "/admin/products",
        element: <ProductModal />,
      },
      {
        path: "/admin/productsSpecial",
        element: <ProductSpecialModal />,
      },
      {
        path: "/admin/product-area",
        element: <Area />,
      },
      {
        path: "/admin/quiz-category",
        element: <QuizCategory />,
      },
      {
        path: "/admin/quiz-module",
        element: <QuizUModule />,
      },
      // {
      //   path:"/admin/quiz",
      //   element:<QuizzesModal/>,
      // },
      
      {
        path: "/admin/quizCategory",
        element: <Quiz />,
      },
      {
        path: "/admin/quizModule",
        element: <Quiz />,
      },
      {
        path: "/admin/quizModule",
        element: <QuizModule />,
      },
      {
        path: "/admin/quizResult",
        element: <QuizResult />,
      },
      {
        path: "/admin/quizViewResult",
        element: <QuizResult />,
      },
      {
        path: "/admin/quiz",
        element: <QuizModal />,
      },
      { path: "/admin/order", element: <Order /> },

      { path: "/admin/order-Invoice", element: <OrderInvoice /> },
      {path:"/admin/orderInvoice/:invoiceId",
        element: <OrderInvoice/>
      },

    

      
    ],
  },
]);
