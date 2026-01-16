import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  AlertTriangle,
  School,
  Truck,
  Shuffle,
  Brain,
  Bed,
  Eye,
  Clock,
  Beer,
  Gauge,
  Smartphone,
  Bike,
  PersonStanding,
} from "lucide-react";
import { FaCarCrash } from "react-icons/fa";

import hazardAwareness from "../../../assets/images/Hazard-awarenessExclamantion.png";
import schoolBusStop from "../../../assets/images/school-bus-300x300.jpg";
import redYellowLorry from "../../../assets/images/red-yellow-lorry-sign-300x183.jpg";
import deviation from "../../../assets/images/deviation.jpg";
<<<<<<< HEAD

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

=======
import alertnessBanner from "../../../assets/alertbg.png";

>>>>>>> 8df5e31714d6fadd5f43fc5f24c82c8f8a3b26d5
export default function HazardAwareness() {
  const textRef = useRef(null);

  const splitText = () => {
    const text = "Topic: Hazard Awareness";
    return text.split("").map((char, i) => <span key={i}>{char}</span>);
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, scale: 0.6 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
<<<<<<< HEAD
    <main className="bg-slate-50 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black to-slate-900">
        <img
          src={hazardAwareness}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Hazard Awareness"
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            ref={textRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          />
          <p className="mt-6 text-lg text-slate-200">
            Learn to identify hazards early and react safely on the road.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/Theory-Portal">
              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
                <MdKeyboardDoubleArrowLeft /> Back
              </button>
            </Link>

            <Link to="/takequizCatName/Hazard-Awareness">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition">
                Start Quiz
              </button>
            </Link>

            <Link to="/vulnerable-road-users">
              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
                Next <MdKeyboardDoubleArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS HAZARD ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={hazardAwareness}
            className="rounded-3xl shadow-2xl hover:scale-105 transition"
            alt="Hazard"
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-10 h-10" />
              What is Hazard Awareness?
            </h2>
            <p className="text-lg text-slate-700">
              Hazards are anything that may force you to slow down, change
              direction, or stop. Identifying hazards early allows you to react
              safely and reduce risk.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ROAD SIGNS ================= */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Important Road Signs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: schoolBusStop,
                icon: <School />,
                text: "This sign indicates a school bus.",
              },
              {
                img: redYellowLorry,
                icon: <Truck />,
                text: "Slow or stationary works vehicle. Overtake on the left.",
              },
              {
                img: deviation,
                icon: <Shuffle />,
                text: "Sharp deviation ahead in the indicated direction.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-3 transition">
                <img src={item.img} className="rounded-xl mb-4" alt="sign" />
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY TERMS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Key Terms to Learn
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Brain />, title: "Anticipation" },
              { icon: <Bed />, title: "Tiredness" },
              { icon: <Eye />, title: "Attention" },
              { icon: <Clock />, title: "Reaction Time" },
              { icon: <Beer />, title: "Drink / Drug Driving" },
              { icon: <FaCarCrash />, title: "Hazard Awareness" },
              { icon: <Gauge />, title: "Speeding" },
              { icon: <Smartphone />, title: "Distractions" },
              { icon: <Bike />, title: "Cyclists" },
              { icon: <PersonStanding />, title: "Pedestrians" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-red-200 transition">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALCOHOL VIDEO ================= */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <iframe
            className="w-full h-[300px] sm:h-[400px] rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/OxOiZ7kXh2k"
            title="Alcohol Effects"
            allowFullScreen
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Effects of Alcohol on Driving
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Less control</li>
              <li>• False confidence</li>
              <li>• Poor judgement</li>
              <li>• Reduced coordination</li>
              <li>• Increased insurance cost</li>
            </ul>
          </div>
        </div>
      </section>

=======
    <main className="bg-slate-50 overflow-hidden font-sans">
      {/* ================= HERO ================= */}
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
                ref={textRef}
                className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                {splitText()}
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn to identify hazards early and react safely on the road.
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

      {/* ================= WHAT IS HAZARD ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={hazardAwareness}
            className="rounded-3xl shadow-2xl hover:scale-105 transition"
            alt="Hazard"
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-10 h-10" />
              What is Hazard Awareness?
            </h2>
            <p className="text-lg text-slate-700">
              The 5th topic from the multiple-choice section of the theory test
              is hazard awareness. As with many of the theory test topics, it’s
              rather straightforward to grasp. Hazards are things on the road
              that can force you to slow down, change your direction or come to
              a stop. It’s important that you’re able to identify these hazards
              early on so that you can make your observations and reduce your
              speed accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ROAD SIGNS ================= */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Important Road Signs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: schoolBusStop,
                icon: <School />,
                text: "This sign on a vehicle indicates that the vehicle is a school bus.",
              },
              {
                img: redYellowLorry,
                icon: <Truck />,
                text: "This sign is found on slow-moving or stationary works vehicles. Overtake on the left, as indicated by the arrow.",
              },
              {
                img: deviation,
                icon: <Shuffle />,
                text: "This sign means a sharp deviation to the left. (right if the arrows face right)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-3 transition"
              >
                <img src={item.img} className="rounded-xl mb-4" alt="sign" />
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY TERMS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            Key Terms to Learn
          </h2>
          <p>
            Here are the key terms you will need to know in order to pass the
            multiple-choice section: Hazard Awareness Whenever you drive towards
            a hazard you should reduce your speed. Hazards are anything that may
            make you slow down, change direction, or stop. Again, if you’re
            stuck for an answer always select the safest option.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Brain />,
                title: "Anticipation",
                definition:
                  "The action of anticipating something; expectation or prediction.",
                content: [
                  "Anticipation in driving is crucial to keeping yourself and others safe.",
                  "Always think ahead and predict what other road users may do.",
                  "Consider how your actions could affect those around you.",
                ],
              },
              {
                icon: <Bed />,
                title: "Tiredness",
                definition: "The state of needing sleep or rest.",
                content: [
                  "Driving while tired is extremely dangerous, especially on motorways.",
                  "If you feel tired, find a safe place to stop and rest.",
                  "If stopping is not immediately possible, open a window for fresh air.",
                  "Top Tip: On long journeys, take regular rest breaks to maintain concentration.",
                ],
              },
              {
                icon: <Eye />,
                title: "Attention",
                definition:
                  "The action of dealing with or taking special care of something.",
                content: [
                  "Driving always requires your full attention.",
                  "Distractions significantly increase the risk of collisions.",
                  "You should always focus on the road environment and other users.",
                ],
              },
              {
                icon: <Clock />,
                title: "Reaction Time",
                definition:
                  "The interval between a situation occurring and the response.",
                content: [
                  "Reaction time affects how quickly you can respond to hazards.",
                  "Reaction times vary between drivers.",
                  "Older drivers generally have slower reaction times.",
                ],
              },
              {
                icon: <Beer />,
                title: "Drink / Drug Driving",
                definition:
                  "Driving under the influence of alcohol, drugs, or medication.",
                content: [
                  "Alcohol and drugs slow reaction times and impair judgement.",
                  "Some medications can cause drowsiness.",
                  "Always check medicine labels or consult your doctor before driving.",
                ],
              },
              {
                icon: <FaCarCrash />,
                title: "Hazard Awareness",
                definition:
                  "Being alert to hazardous situations and knowing how to react.",
                content: [
                  "Hazards can develop quickly and without warning.",
                  "The behaviour of vehicles, cyclists, and pedestrians can indicate danger.",
                  "Early awareness gives you more time to react safely.",
                ],
              },
              {
                icon: <Gauge />,
                title: "Speeding",
                definition: "Driving faster than is safe or permitted.",
                content: [
                  "Speeding is not only breaking the speed limit.",
                  "Driving too fast for road, traffic, or weather conditions is dangerous.",
                  "Always adjust speed near schools and in poor conditions.",
                ],
              },
              {
                icon: <Smartphone />,
                title: "Distractions",
                definition:
                  "Anything that reduces concentration while driving.",
                content: [
                  "High concentration levels are essential for road safety.",
                  "Avoid looking at maps, adjusting the radio, or using mobile phones.",
                  "Stop and rest if your concentration begins to drop.",
                ],
              },
              {
                icon: <Bike />,
                title: "Motorbikes & Cyclists",
                definition: "Vulnerable road users requiring extra care.",
                content: [
                  "Motorbikes can be hidden by windscreen pillars.",
                  "Always check mirrors and blind spots carefully.",
                  "Cyclists may swerve to avoid drains or potholes.",
                  "Give cyclists plenty of space and time at junctions.",
                ],
              },
              {
                icon: <PersonStanding />,
                title: "Pedestrians",
                definition: "People walking on or near the road.",
                content: [
                  "Watch for pedestrians where there is no pavement.",
                  "Children and older people may misjudge vehicle speed.",
                  "Take extra care on residential roads with parked cars.",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group bg-white/70 backdrop-blur-xl 
                 border border-white/40 
                 p-7 rounded-3xl
                 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
                 transition-all duration-500
                 hover:-translate-y-4 hover:rotate-[0.5deg]
                 hover:shadow-red-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-200/30 to-pink-200/10 opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full 
                      bg-gradient-to-br from-red-500 to-pink-500 
                      flex items-center justify-center
                      text-white shadow-xl mb-5
                      group-hover:scale-110 transition"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-extrabold mb-2 text-slate-800">
                  {item.title}
                </h3>

                {/* Definition */}
                <p className="relative z-10 text-sm text-slate-600 italic mb-3">
                  <span className="font-semibold">Definition:</span>{" "}
                  {item.definition}
                </p>

                {/* Points */}
                <ul className="relative z-10 space-y-2 text-slate-700 text-sm list-disc pl-5">
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALCOHOL VIDEO ================= */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <iframe
            className="w-full h-[300px] sm:h-[400px] rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/OxOiZ7kXh2k"
            title="Alcohol Effects"
            allowFullScreen
          />
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              The affects of alcohol on driving
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Less control</li>
              <li>• False confidence</li>
              <li>• Poor judgement</li>
              <li>• Reduced coordination</li>
              <li>• Increased insurance cost</li>
              <li>Reduced concentration.</li>
              <li>
                Get a conviction for driving whilst unfit through drink or drugs
                and your car insurance premium will rise significantly.
              </li>
            </ul>
          </div>
        </div>
      </section>

>>>>>>> 8df5e31714d6fadd5f43fc5f24c82c8f8a3b26d5
      {/* ================= QUIZ ================= */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-3xl font-extrabold mb-6">
          Test <span className="text-red-600">Yourself</span>
        </h2>
        <Link to="/takequizCatName/Hazard-Awareness">
          <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-xl hover:scale-105 transition">
            Start Quiz
          </button>
        </Link>
      </section>
    </main>
  );
}
