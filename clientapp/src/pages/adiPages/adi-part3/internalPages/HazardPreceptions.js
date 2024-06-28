import React from "react";
import styles from "../../AdiPartOne.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import Lplateimg from "../../../../assets/images/L-Plate.jpg";
import roundAbouts from "../../../../assets/images/roundabouts.png";
import parkedCars from "../../../../assets/images/parkedCars.png";
import junction from "../../../../assets/images/junction.png";
import Bends from "../../../../assets/images/bends.png";
import roadworks from "../../../../assets/images/roadWorks.png";
import roadSurface from "../../../../assets/images/roadSurface.png";
import zebra from "../../../../assets/images/zebraCrossing.png";
import toucan from "../../../../assets/images/toucan.png";
import equestrian from "../../../../assets/images/equestrian.png";
import pelican from "../../../../assets/images/pelican.png";
import puffin from "../../../../assets/images/puffin.png";
import emergencyService from "../../../../assets/images/emergencyService.png";
import builtUpTraffic from "../../../../assets/images/builtupTraffic.png";
import Cyclist from "../../../../assets/images/cyclistsImg.png";
import pedestrian from "../../../../assets/images/pedestrian.png";
import carDrivers from "../../../../assets/images/carDrivers.png";
import MotorCyclists from "../../../../assets/images/MotorCyclistsImg.png";
import cyclists from "../../../../assets/images/Cyclistssss.png";
import HorseRiders from "../../../../assets/images/horse-ridersImges.png";
import DriversOfLargeVehicle from "../../../../assets/images/diversLargeVehicle.png";
import VehicleCarrying from "../../../../assets/images/vehicalscarrying.png";
import overtakingVehicle from "../../../../assets/images/overtaking vehicles.png";
import disabledPoweredVehicle from "../../../../assets/images/disabledPawer.png";
import OlderDrivers from "../../../../assets/images/olderDrivers.png";
import Rain from "../../../../assets/images/rainImg.png";
import Ice from "../../../../assets/images/iceImg.png";
import Fog from "../../../../assets/images/fogImg.png";
import BrightSun from "../../../../assets/images/sunSet.png";
import { Link } from "react-router-dom";

export default function HazardPreceptions() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>AWARD-WINNING DRIVING LESSONS</h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  Forget the rest,
                  <br /> learn with the best!
                </h2>
              </div>
              <div className={styles.btn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button id={styles.btn}>Contact Us</button>
                </a>
              </div>
            </div>
            <div className={styles.video}>
              <img src={Lplateimg} alt="LogoImg" />
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <div className={styles.hazardTestWorkListDiv}>
            <p>
              In this video, we will be discussing Hazard Perception and some
              tips and tricks to ensure you fully understand this portion of the
              exam.
            </p>
            <hr style={{ opacity: "1", border: "1px solid red" }}></hr>

            <div className={styles.innerTheorySupportContent}>
              <div className={styles.theorySupportContentVideo}>
                <iframe
                  width="1120"
                  height="631"
                  src="https://www.youtube.com/embed/SdQRkmdhwJs"
                  title="Hazard perception test 2024: official DVSA guide"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <ul type="none">
              <h2
                style={{ textAlign: "center", fontSize: "2rem", color: "red" }}
              >
                What is a hazard?
              </h2>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  A hazard is a situation that may require a driver or rider to
                  respond by taking action, such as changing speed or direction.
                  To watch videos on how to handle the hazard perception test,
                  click the button at the bottom of the page.
                </p>
              </li>
              <h2
                style={{ textAlign: "center", fontSize: "2rem", color: "red" }}
              >
                Static hazards
              </h2>
              <li>
                <IoMdArrowDropright id="listrightIcon" />{" "}
                <p>
                  A static hazard is a road feature that doesn’t change and
                  where there is an increased risk of danger developing
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <p>There are many types of static hazard, including:</p>
          <div id={styles.imagesHSection}>
            <img src={roundAbouts} alt="roundAbouts" />
            <img src={parkedCars} alt="parkedCars" />
            <img src={junction} alt="junction" />
            <img src={Bends} alt="Bends" />
            <img src={roadworks} alt="roadworks" />
            <img src={roadSurface} alt="roadSurface" />
          </div>
        </section>
        {/* ///////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", color: "red" }}>
            Different types of crossings
          </h2>
          <p>
            There will often be a road sign warning that you are approaching a
            static hazard.{" "}
          </p>
          <div id={styles.imagesHSection}>
            <img src={zebra} alt="zebra" />
            <img src={toucan} alt="toucan" />
            <img src={equestrian} alt="equestrian" />
            <img src={pelican} alt="pelican" />
            <img src={puffin} alt="puffin" />
          </div>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", color: "red" }}>
            Moving hazards
          </h2>
          <p>Moving hazards tend to be hazards caused by other road users. </p>
          <div id={styles.imagesHSection}>
            <img src={emergencyService} alt="emergencyService" />
            <img src={builtUpTraffic} alt="builtUpTraffic" />
            <img src={Cyclist} alt="Cyclist" />
          </div>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", color: "red" }}>
            Road user and what to do
          </h2>

          <div id={styles.imagesHSection}>
            <section>
              <img src={pedestrian} alt="pedestrian" />
              <p>
                If you see pedestrians in the road, be patient and wait for them
                to finish crossing. On country roads there may be no pavement,
                so look out for pedestrians in the road. They may be walking
                towards you on your side of the road.{" "}
              </p>
            </section>
            <section>
              <img src={carDrivers} alt="carDrivers" />
              <p>
                Hazards caused by other drivers are all too common and can lead
                to emotional reactions. An emotional reaction may affect your
                ability to drive safely and could increase your likelihood of
                causing an incident. Stay calm and make allowances for other
                drivers. Remember, even experienced drivers can make mistakes.{" "}
              </p>
            </section>
            <section>
              <img src={MotorCyclists} alt="MotorCyclists" />
              <p>
                Look out for motorcyclists, especially when you’re emerging from
                a junction, turning into a road on your right or changing lanes
                or moving out to overtake.{" "}
              </p>
            </section>
            <section>
              <img src={cyclists} alt="cyclists" />
              <p>
                Be aware of cyclists and give them plenty of room. They may
                wobble or swerve to avoid drains or potholes. At junctions or
                traffic lights, give cyclists time to turn or pull away. When
                travelling in slow traffic, before you turn left, check for
                cyclists filtering through the traffic on your left.
              </p>
            </section>
            <section>
              <img src={HorseRiders} alt="HorseRiders" />
              <p>
                Horses can be unpredictable and easily spooked. Reduce your
                speed and give them plenty of room when overtaking.{" "}
              </p>
            </section>
            <section>
              <img src={DriversOfLargeVehicle} alt="DriversOfLargeVehicle" />
              <p>
                If you see a bus at a bus stop, remember that people may get off
                and then cross the road, or that the bus may be about to move
                off. School buses might stop at places other than bus stops. At
                some bridges, high vehicles may need to use the centre of the
                road to be able to pass underneath. Large goods vehicles over 13
                metres long have red and yellow markings at the back of the
                vehicle.{" "}
              </p>
            </section>
            <section>
              <img src={VehicleCarrying} alt="VehicleCarrying" />
              <p>
                Some vehicles have information signs on the back, to show that
                they contain a hazardous load. Learn what the signs mean.{" "}
              </p>
            </section>
            <section>
              <img src={overtakingVehicle} alt="overtakingVehicle" />
              <p>
                Watch out for vehicles, especially motorcyclists, overtaking and
                cutting in front of you. If you need to, drop back to keep a
                safe distance from the vehicle in front. When turning right,
                don’t forget to check to your right for overtaking vehicles
                before making the turn.{" "}
              </p>
            </section>
            <section>
              <img src={disabledPoweredVehicle} alt="disabledPoweredVehicle" />
              <p>
                Reduce your speed and be careful. These small vehicles are
                extremely vulnerable on the road because they’re difficult to
                see and they travel slow.
              </p>
            </section>
            <section>
              <img src={OlderDrivers} alt="OlderDrivers" />
              <p>
                Older drivers may not react very quickly, so be patient with
                them. You can practise spotting hazards in everyday situations
                such as when you’re on a bus, as a passenger in a car, or riding
                a bicycle.{" "}
              </p>
            </section>
          </div>
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <p style={{ textAlign: "center" }}>
            Different types of weather such as rain, ice fog and even bright
            sunlight can create extra hazards. They can make it harder to see
            the road or affecting your control of the vehicle. Change the way
            you drive or ride to suit the weather conditions. The road
            conditions can be another hazard and some road users will be
            affected more than others. For example, a loose road surface will be
            a greater hazard for a motorcyclist than for a car driver, but the
            car driver needs to be aware of this and make allowances as
            necessary.
          </p>

          <div id={styles.imagesHSection}>
            <section>
              <img src={Rain} alt="pedestrian" />
              <p>
                Double your distance from the vehicle in front to four seconds.
              </p>
            </section>
            <section>
              <img src={Ice} alt="Ice" />
              <p>
                Slow down and increase your separation distance: allow up to 10
                times the gap you’d leave in the dry.
              </p>
            </section>
            <section>
              <img src={Fog} alt="Fog" />
              <p>Slow down and use dipped headlights.</p>
            </section>
            <section>
              <img src={BrightSun} alt="BrightSun" />
              <p>Be aware that sunlight can dazzle you or other drivers.</p>
            </section>
          </div>
          <p style={{ textAlign: "center" }}>
            The road conditions can be another hazard and some road users will
            be affected more than others. For example, a loose road surface will
            be a greater hazard for a motorcyclist than for a car driver, but
            the car driver needs to be aware of this and make allowances as
            necessary.
          </p>
        </section>

        <div
          id={styles.btnDiv}
          style={{
            maxWidth: "300px",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Link to="hazard-perception">
            <button id={styles.hazzardBtn}>Hazard Videos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
