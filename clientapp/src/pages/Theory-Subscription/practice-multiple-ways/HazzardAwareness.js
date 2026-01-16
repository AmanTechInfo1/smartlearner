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

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

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
