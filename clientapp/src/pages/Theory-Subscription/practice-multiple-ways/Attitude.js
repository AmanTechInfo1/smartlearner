import React, { useEffect, useRef } from "react";
import styles from "./css/Alertness.module.css";
import adaptedImg from "../../../assets/images/dangers-of-tailgating-1024x683.jpg";
import unmarkedImg from "../../../assets/images/unmarked-crossroads.jpg";
import FillerCap from "../../../assets/images/fillerCap.jpeg";
import secondRuleImg from "../../../assets/images/2-second-rule.jpg";
import oneWayStreet from "../../../assets/images/one-wayStreet.jpg";
import tramsImg from "../../../assets/images/tram-sign-drivers.png";
import horsesRoadImg from "../../../assets/images/horse-road-1024x576.jpg";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import alertnessBanner from "../../../assets/alertbg.png";

import gsap from "gsap";

import {
  AlertTriangle,
  ShieldCheck,
  Car,
  Users,
  TrafficCone,
  Lightbulb,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Attitude() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans bg-slate-50">
      {/* ================= FIXED BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${alertnessBanner})`,
          }}
        />

        {/* Dark Overlay (controls opacity) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
               font-extrabold text-white leading-tight max-w-xl"
              >
                <span className="text-red-500">Attitude</span> on the Road
              </h1>

              <p
                className="mt-4 sm:mt-6 
              text-sm sm:text-base md:text-lg lg:text-xl 
              text-slate-200 leading-relaxed max-w-xl"
              >
                Safe driving starts with the right attitude — patience,
                awareness, and respect for everyone.
              </p>

              <Link to="/Contact-Us">
                <button
                  className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg"
                  style={{ border: "none" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Intro ================= */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl p-10 hover:shadow-red-200 transition-all duration-300">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                <span className="px-3 py-1 bg-red-100 rounded-xl text-red-600">
                  <ShieldCheck />
                </span>{" "}
                What is Attitude?
              </span>
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mb-6" />

            <p className="text-gray-700 text-lg leading-relaxed">
              The second topic is Attitude. This topic relates to a driver’s
              attitude towards other road users, the rules of the road, and
              their own driving in general. It also covers how drivers should
              react to things that occur on the road.
              <br />
              It is important that all drivers display a measure of patience,
              control and awareness when taking to the road, avoiding reckless
              and careless behaviour that can endanger themselves, and other
              road users.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8">
            <ul className="space-y-4 text-lg font-medium text-gray-800">
              <h2>Attitude rules:</h2>
              <li>✔ Give way and follow priority rules</li>
              <li>✔ Be considerate and patient</li>
              <li>✔ Make intentions clear</li>
              <li>✔ Use horn and lights responsibly</li>
              <li>✔ Avoid tailgating</li>
              <li>✔ Be careful around animals</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-20 bg-gradient-to-r from-red-600 to-orange-500 shadow-inner"
      >
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
            Remember P.C.P.C
          </h3>
          <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full" />
          <p className="text-xl md:text-2xl font-medium">
            Positioning • Consideration • Priority • Courtesy
          </p>
        </div>
      </section>

      {/* ================= Content Blocks ================= */}
      {[
        {
          title: "Adapted Teaching Style",
          img: adaptedImg,
          text: "Tailgating is when a driver drives behind another vehicle while not leaving sufficient distance to stop without causing a collision if the vehicle in front stops suddenly. Is tailgating illegal? Yes, tailgating is a careless driving offence, and you could land yourself a fine of up to £200 or points on your license if you’re caught by the police.",
          icon: <Car />,
        },
        {
          title: "Unmarked Junctions",
          img: unmarkedImg,
          text: "The Highway Code reminds us that nobody has priority at unmarked crossroads (rule 146). That means that you don’t have any formal right to emerge onto the junction before other vehicles. Neither do they have the right to go ahead of you, so it is important that you evaluate the current situation and decide when it is safest for you to emerge.",
          icon: <TrafficCone />,
        },
        {
          title: "Filler Cap",
          img: FillerCap,
          text: "A loose filler cap on a diesel fuel tank can cause the road to become slippery for other road users. This is particularly dangerous in wet conditions, although a huge amount of traction (tyre grip) is also lost in drier conditions.",
          icon: <AlertTriangle />,
        },
        {
          title: "One-Way Streets",
          img: oneWayStreet,
          text: "You can park/overtake on either side of this road type. When wanting to turn right you should position your car in the right-hand lane. If you do enter a one-way street incorrectly, you should not reverse back out again. Drivers in this situation should pull up on the side of the road as early as possible and put the hazard lights on, wait for a gap in the traffic so you can turn your vehicle around, and then drive out of the road safely.",
          icon: <Users />,
        },
        {
          title: "2 Second Rule",
          img: secondRuleImg,
          text: " In dry conditions, you should always leave a 2-second time gap in between yourself and the car in front of you. Depending on the weather conditions it will depend on the time gap you leave. For example, in wet conditions, it is 4 seconds, and in icy conditions, it is x10 more than dry conditions.",
          icon: <Lightbulb />,
        },

        {
          title: "Trams",
          img: tramsImg,
          text: "Trams are eco-friendly, electric-powered modes of public transport. Their rails pose the most risk to cyclists and they cannot steer to avoid obstacles. Their signs are diamond-shaped.",
          icon: <ShieldCheck />,
        },
        {
          title: "Flashing Headlights",
          img: secondRuleImg,
          text: "Only flash your headlights to let other road users know that you are there. Do not flash your headlights to convey any other message or intimidate other road users. This is because flashing others, whether pedestrians or motorists, can send mixed signals, thus posing risks for everyone involved.",
          icon: <Lightbulb />,
        },
        {
          title: "Horses",
          img: horsesRoadImg,
          text: " If you see horses, slow down and allow plenty of room. If you happen to see a horse at a roundabout, you should never assume which direction they will go. This rule also applies to cyclists.",
          icon: <ShieldCheck />,
        },
      ].map((item, i) => (
        <section
          ref={(el) => (sectionsRef.current[i + 2] = el)}
          className="max-w-6xl mx-auto px-6 py-10"
        >
          <div className="grid md:grid-cols-2 gap-14 items-center bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 hover:shadow-red-200 transition-all duration-300">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-2xl shadow-xl w-full h-[340px] object-cover hover:scale-105 transition-transform duration-300"
            />

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                <span className="p-3 bg-red-100 rounded-xl text-red-600">
                  {item.icon}
                </span>
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  {item.title}
                </span>
              </h3>

              <div className="w-16 h-1 bg-red-600 rounded-full mb-5" />

              <p className="text-lg text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className={styles.mockTestContainerSection}>
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Attitude">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
