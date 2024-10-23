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
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest,
                  <span>learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>AWARD-WINNING DRIVING LESSONS</h2>
              </div>
              <div className={styles.alertBtn}>
              <Link to="/Contact-Us" style={{textDecoration:"none"}}>
                {" "}
                <button id={styles.btn}>Contact Us</button>
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <p id={styles.hazardTestWorkListSectionPara}>
            In this video, we will be discussing Hazard Perception and some tips
            and tricks{" "}
            <span>
              To ensure you fully understand this portion of the exam.
            </span>
          </p>
          <hr style={{ opacity: "1", border: "1px solid blue" }}></hr>
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
                allowfullscreen></iframe>
            </div>
          </div>
        </section>

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What is <span>a hazard?</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  A hazard is a situation that may require a driver or rider to
                  respond by taking action, such as changing speed or direction.
                  To watch videos on how to handle the hazard perception test,
                  click the button at the bottom of the page.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* //////////////////////////////////////// */}

        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Static <span>hazards</span>
          </h2>
          <div className={styles.bgColorList33}>
            <ul type="none">
              <li>
                <p>
                  A static hazard is a road feature that doesn’t change and
                  where there is an increased risk of danger developing
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            There are many types of <span>static hazard, including:</span>
          </h2>
          <section className={styles.imagesHSection}>
            <div id={styles.imagesHSection}>
              <img src={roundAbouts} alt="roundAbouts" />
              <img src={parkedCars} alt="parkedCars" />
              <img src={junction} alt="junction" />
              <img src={Bends} alt="Bends" />
              <img src={roadworks} alt="roadworks" />
              <img src={roadSurface} alt="roadSurface" />
            </div>
          </section>{" "}
        </section>
        {/* ///////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Different types <span>Of crossings</span>
          </h2>

          <p id={styles.hazardTestWorkListSectionPara}>
            There will often be a road sign warning{" "}
            <span>that you are approaching a static hazard. </span>
          </p>

          <section className={styles.imagesHSection}>
            <div id={styles.imagesHSection}>
              <img src={zebra} alt="zebra" />
              <img src={toucan} alt="toucan" />
              <img src={equestrian} alt="equestrian" />
              <img src={pelican} alt="pelican" />
              <img src={puffin} alt="puffin" />
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>Moving hazards</h2>
          <section className={styles.imagesHSection}>
            <p id={styles.hazardTestWorkListSectionPara}>
              Moving hazards tend to be{" "}
              <span> hazards caused by other road users.</span>{" "}
            </p>
            <div id={styles.imagesHSection}>
              <img src={emergencyService} alt="emergencyService" />
              <img src={builtUpTraffic} alt="builtUpTraffic" />
              <img src={Cyclist} alt="Cyclist" />
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Road user and<span> what to do</span>
          </h2>
          <section className={styles.imagesHSection}>
            <div id={styles.imagesHSection}>
              <section>
                <img src={pedestrian} alt="pedestrian" />
                <section id={styles.resLists12}>
                  {" "}
                  <p>
                    If you see pedestrians in the road, be patient and wait for
                    them to finish crossing. On country roads there may be no
                    pavement, so look out for pedestrians in the road. They may
                    be walking towards you on your side of the road.{" "}
                  </p>
                </section>
              </section>
              <section>
                <img src={carDrivers} alt="carDrivers" />
                <section id={styles.resLists21}>
                  {" "}
                  <p>
                    Hazards caused by other drivers are all too common and can
                    lead to emotional reactions. An emotional reaction may
                    affect your ability to drive safely and could increase your
                    likelihood of causing an incident. Stay calm and make
                    allowances for other drivers. Remember, even experienced
                    drivers can make mistakes.{" "}
                  </p>
                </section>
              </section>
              <section>
                <img src={MotorCyclists} alt="MotorCyclists" />
                <section id={styles.resLists12}>
                  <p>
                    Look out for motorcyclists, especially when you’re emerging
                    from a junction, turning into a road on your right or
                    changing lanes or moving out to overtake.{" "}
                  </p>
                </section>
              </section>
              <section>
                <img src={cyclists} alt="cyclists" />
                <section id={styles.resLists21}>
                  <p>
                    Be aware of cyclists and give them plenty of room. They may
                    wobble or swerve to avoid drains or potholes. At junctions
                    or traffic lights, give cyclists time to turn or pull away.
                    When travelling in slow traffic, before you turn left, check
                    for cyclists filtering through the traffic on your left.
                  </p>{" "}
                </section>
              </section>
              <section>
                <img src={HorseRiders} alt="HorseRiders" />
                <section id={styles.resLists12}>
                  <p>
                    Horses can be unpredictable and easily spooked. Reduce your
                    speed and give them plenty of room when overtaking.{" "}
                  </p>{" "}
                </section>
              </section>
              <section>
                <img src={DriversOfLargeVehicle} alt="DriversOfLargeVehicle" />
                <section id={styles.resLists21}>
                  <p>
                    If you see a bus at a bus stop, remember that people may get
                    off and then cross the road, or that the bus may be about to
                    move off. School buses might stop at places other than bus
                    stops. At some bridges, high vehicles may need to use the
                    centre of the road to be able to pass underneath. Large
                    goods vehicles over 13 metres long have red and yellow
                    markings at the back of the vehicle.{" "}
                  </p>{" "}
                </section>
              </section>
              <section>
                <img src={VehicleCarrying} alt="VehicleCarrying" />
                <section id={styles.resLists12}>
                  <p>
                    Some vehicles have information signs on the back, to show
                    that they contain a hazardous load. Learn what the signs
                    mean.{" "}
                  </p>{" "}
                </section>
              </section>
              <section>
                <img src={overtakingVehicle} alt="overtakingVehicle" />
                <section id={styles.resLists21}>
                  <p>
                    Watch out for vehicles, especially motorcyclists, overtaking
                    and cutting in front of you. If you need to, drop back to
                    keep a safe distance from the vehicle in front. When turning
                    right, don’t forget to check to your right for overtaking
                    vehicles before making the turn.{" "}
                  </p>
                </section>
              </section>
              <section>
                <img
                  src={disabledPoweredVehicle}
                  alt="disabledPoweredVehicle"
                />
                <section id={styles.resLists12}>
                  <p>
                    Reduce your speed and be careful. These small vehicles are
                    extremely vulnerable on the road because they’re difficult
                    to see and they travel slow.
                  </p>
                </section>
              </section>
              <section>
                <img src={OlderDrivers} alt="OlderDrivers" />
                <section id={styles.resLists21}>
                  <p>
                    Older drivers may not react very quickly, so be patient with
                    them. You can practise spotting hazards in everyday
                    situations such as when you’re on a bus, as a passenger in a
                    car, or riding a bicycle.{" "}
                  </p>
                </section>
              </section>
            </div>
          </section>{" "}
        </section>
        {/* ///////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <p style={{ textAlign: "center", color: "#006ace" }}>
            Different types of weather such as rain, ice fog and even bright
            sunlight can create extra hazards. They can make it harder to see
            the road or affecting your control of the vehicle. Change the way
            you drive or ride to suit the weather conditions. The road
            conditions can be another hazard and some road users will be
            affected more than others.{" "}
            <span>
              {" "}
              For example, a loose road surface will be a greater hazard for a
              motorcyclist than for a car driver, but the car driver needs to be
              aware of this and make allowances as necessary.
            </span>
          </p>

          <div id={styles.imagesHSection}>
            <section>
              <img src={Rain} alt="pedestrian" />
              <p id={styles.resLists12}>
                Double your distance from the vehicle in front to four seconds.
              </p>
            </section>
            <section>
              <img src={Ice} alt="Ice" />
              <p id={styles.resLists21}>
                Slow down and increase your separation distance: allow up to 10
                times the gap you’d leave in the dry.
              </p>
            </section>
            <section>
              <img src={Fog} alt="Fog" />
              <p id={styles.resLists12}>Slow down and use dipped headlights.</p>
            </section>
            <section>
              <img src={BrightSun} alt="BrightSun" />
              <p id={styles.resLists21}>
                Be aware that sunlight can dazzle you or other drivers.
              </p>
            </section>
          </div>
          <p style={{ textAlign: "center", color: "#006ace" }}>
            The road conditions can be another hazard and some road users will
            be affected more than others.{" "}
            <span>
              For example, a loose road surface will be a greater hazard for a
              motorcyclist than for a car driver, but the car driver needs to be
              aware of this and make allowances as necessary.
            </span>
          </p>
        </section>

        <div
          id={styles.btnDiv}
          style={{
            maxWidth: "300px",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}>
          <Link to="/hazard-clips">
            <button id={styles.hazzardBtn}>Hazard Videos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
