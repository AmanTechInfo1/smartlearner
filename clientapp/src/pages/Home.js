import styles from "./css/home.module.css";
import callbackimg from "../assets/images/callbacksupportimage.png";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, BookOpenText } from "lucide-react";
import ImagesCarousel from "../components/imageCarousel/ImagesCarousel";
import CallBackForm from "../components/forms/CallBackForm";
import StaticTestimonial from "../components/testimonials/StaticTestimonial";
import { Helmet } from "react-helmet-async";
import ProductShowcase from "../components/ui/productShowCase/Productshowcase";
import SubscriptionPdi from "../components/ui/productShowCase/SubscriptionPdi";
import { useState, useEffect } from "react";
import TheoryProductShowCase from "../components/ui/productShowCase/TheoryProductShowCase";
import DrivingLessonsCarousel from "../components/ui/drivingLesson/DrivingLessonsCarousel";
import { Element, scroller } from "react-scroll";
import { useParams } from "react-router-dom";
import NewHomeBanner from "../components/ui/newHomeBanner/NewHomeBanner";
import ChristmasBanner from "../components/ui/newHomeBanner/ChristmasBanner";
import NewYearBanner from "../components/ui/newHomeBanner/NewYearBanner";
import VelentineDayBanner from "../components/ui/newHomeBanner/VelentineDayBanner";
import SpringBanner from "../components/ui/newHomeBanner/SpringBanner";
import AprilBanner from "../components/ui/newHomeBanner/AprilBanner";
import RabbitBanner from "../components/ui/newHomeBanner/RabbitBanner";
import UKBranchMap from "./AddOns/UKBranchMap";
import Newbanner1 from "../components/ui/newHomeBanner/Newbanner1";
import NewBanner2 from "../components/ui/newHomeBanner/NewBanner2";
import NewBanner3 from "../components/ui/newHomeBanner/NewBanner3";
import NewBanner4 from "../components/ui/newHomeBanner/NewBanner4";
import NewBanner5 from "../components/ui/newHomeBanner/NewBanner5";
import NewHomebanners8 from "../components/ui/NewhomeDesign/NewHomebanners8";
import HomePageDesign from "../components/ui/NewhomeDesign/HomePageDesign";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToRef = (ref) => {
    if (ref && ref.scrollIntoView) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };
  const lessonsRefCallback = (node) => {
    if (node && activeSection === "lessons") {
      scrollToRef(node);
    }
  };

  const pdiRefCallback = (node) => {
    if (node && activeSection === "pdi") {
      scrollToRef(node);
    }
  };

  const theoryRefCallback = (node) => {
    if (node && activeSection === "theory") {
      scrollToRef(node);
    }
  };

  const handleShow = (section) => {
    setActiveSection(section); // Scroll will happen when section mounts
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  };

  const { section } = useParams();
  useEffect(() => {
    if (section) {
      scroller.scrollTo(`${section}-section`, {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  return (
    <div className={styles.homepage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smartlearner driving school in coventry Driving lessons</title>
        <meta
          name="description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
        <meta
          property="og:title"
          content="Smartlearner driving school in coventry"
        />
        <meta
          property="og:description"
          content="SmartLearner Driving School, established in 2004, offers expert driving lessons in the West Midlands with advanced technology. "
        />
      </Helmet>
      <HomePageDesign />
      {/* <NewHomebanners8 /> */}

      {/* <NewYearBanner /> */}
      {/* <ChristmasBanner />
      <SpringBanner />  
             <VelentineDayBanner />   
   
      <RabbitBanner /> 
       <Newbanner1/>
      
      */}
      {/* <section>
        <NewBanner3 />
      </section> */}

     
    </div>
  );
}
