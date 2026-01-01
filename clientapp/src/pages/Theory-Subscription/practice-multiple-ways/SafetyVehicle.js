import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Fuel,
  Car,
  Disc,
  BatteryCharging,
  Route,
  Lock,
  ParkingSquare,
  Leaf,
  AlertTriangle,
} from "lucide-react";

import orangeSafety from "../../../assets/alertbg.png";
import routePlanning from "../../../assets/images/routesPlanning.jpg";
import vehicleS from "../../../assets/images/vehicalS.jpeg";
import parking from "../../../assets/images/parkingImg.jpg";
import enviromentIssue from "../../../assets/images/enviromentalIssueImg.jpg";
import GeneralIssue from "../../../assets/images/ORANGE-SAFETY.png";

const SafetyAndRoad = () => {
  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= FIXED BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${orangeSafety})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Safety & <span className="text-red-500">Your Vehicle</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn how vehicle maintenance, responsibility, and preparation
                play a vital role in road safety.
              </p>

              <Link to="/Contact-Us">
                <button className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS SAFETY ================= */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              What is{" "}
              <span className="text-red-600">Safety in Your Vehicle?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mt-4">
              The third topic from the theory test focuses on safety and your
              vehicle. It explains why maintaining your vehicle is your
              responsibility and highlights safety checks required every time
              you drive.
            </p>

            <p className="text-slate-600 mt-4">
              This section also covers environmental awareness, vehicle
              security, and responsible driving behaviour.
            </p>
          </div>

          <img
            src={GeneralIssue}
            alt="Vehicle Safety"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= VEHICLE SAFETY ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <ShieldCheck className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Vehicle <span className="text-red-600">Safety</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Fuel */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
              <Fuel className="w-9 h-9 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fuel Consumption</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>High speed and harsh braking increase fuel use</li>
                <li>Smooth driving reduces fuel consumption</li>
              </ul>
            </div>

            {/* Steering */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
              <Car className="w-9 h-9 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Steering & Oil</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Under-inflated tyres cause heavy steering</li>
                <li>Check oil levels before long journeys</li>
              </ul>
            </div>

            {/* Tyres */}
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-red-500">
              <Disc className="w-9 h-9 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tyres & Wheels</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Minimum tread depth: 1.6mm</li>
                <li>Sidewall cuts are illegal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROUTE & SECURITY ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <Route className="w-8 h-8 text-red-600" />
              <h4 className="text-xl font-semibold">Route Planning</h4>
            </div>
            <p className="text-slate-700">
              Allow enough time, avoid peak traffic, plan alternative routes,
              and use maps or route planners before your journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-red-600" />
              <h4 className="text-xl font-semibold">Vehicle Security</h4>
            </div>
            <p className="text-slate-700">
              Lock your vehicle, remove valuables, park in well-lit areas, and
              never leave the engine running unattended.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PARKING & ENVIRONMENT ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <ParkingSquare className="w-8 h-8 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Parking</h4>
            <p className="text-slate-700">
              Never park where you cause an obstruction. Use parking lights when
              required on roads above 30mph.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <Leaf className="w-8 h-8 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Environmental Issues</h4>
            <p className="text-slate-700">
              Reducing speed, servicing your vehicle, and avoiding short trips
              helps protect the environment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GENERAL TIPS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              General <span className="text-red-600">Tips</span>
            </h2>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-2xl border-l-8 border-red-500 max-w-4xl">
            <p className="text-slate-700">
              Many questions in this section are governed by law, including
              dashboard warning lights, correct headlight use, and hazard
              lights.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SafetyAndRoad;
