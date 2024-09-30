import React from "react";
import styles from "./css/RoadsTraffic.module.css";

import {
  // FaTimesCircle,
  FaLightbulb,
  FaBullhorn,
  FaArrowsAltH,
  FaCheckCircle,
} from "react-icons/fa";
import turnLeftSign from "../../../assets/images/turn-left-ahead-sign.jpg";
import circleOrders from "../../../assets/images/30-red-150x150.jpg";
import triangleAhead from "../../../assets/images/triangle.png";
import oneWyroad from "../../../assets/images/one-way-rectangle-equals-information.png";
import stopSign from "../../../assets/images/stop-sign-150x150.jpg";
import giveWay from "../../../assets/images/576px-Give-Way-sign.svg.png";
import NoSpeed from "../../../assets/images/no-speed-lim.png";
import capture from "../../../assets/images/Capture.png";
import transparentCurved from "../../../assets/images/transparent-curved.png";
import NoMotorVehicle from "../../../assets/images/No-motor-Vehicles@3x.png";
import MauritiusRoad from "../../../assets/images/Mauritius_Road_Signs.png";
import TwoWayRoad from "../../../assets/images/Two-way_traffic_straight.svg-1024x905.png";
import peopleWalking from "../../../assets/images/peopleWalking.jpg";
import capture1 from "../../../assets/images/Capture-1.png";
import endDual from "../../../assets/images/endDual.png";
import traffLights from "../../../assets/images/traf-lights.jpg";
import { Link } from "react-router-dom";

export default function RoadTraffic() {
  return (
    <div className={styles.AdiPartOne}>
      <div className={styles.AdiPortalPartOne}>
        <section className={styles.imageSection}>
          <div className={styles.opicity}></div>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <div className={styles.heading1}>
                <h1>
                  Forget the rest, <span>learn with the best!</span>
                </h1>
              </div>

              <div className={styles.heading2}>
                <h2>
                  Road and <span>Traffic Signs</span>{" "}
                </h2>
              </div>
              <div className={styles.alertBtn}>
                <a style={{ textDecoration: "none" }} href="tel:+4402475092784">
                  <button>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            What are road and <span>Traffic Signs?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={turnLeftSign} alt="turnLeftSign" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    The 11th topic from the theory test is road and traffic
                    signs. Whilst all of the topics we’ve covered (and are going
                    to cover) are vital in helping you become a safe driver,
                    road and traffic signs probably take the cake in terms of
                    importance. Once you get behind the wheel in your lessons,
                    you’ll need to be able to identify road and traffic signs
                    and know what action(s) you need to take. Otherwise, you
                    could end up endangering yourself and other road users.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.hazardTestH23}>
            <ul type="none">
              <h2>
                In this section of multiple choice,{" "}
                <span>you’ll find out about what you can learn from:</span>
              </h2>
            </ul>
          </section>
          <section className={styles.bgColorList2}>
            <ul type="none">
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>The shapes of road signs</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" /> <p>Road markings</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>The colours of traffic lights and their sequences</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>Motorway warning lights</p>
              </li>
              <li>
                <FaCheckCircle id="listrightIcon" />{" "}
                <p>The signals used by other drivers and by police officers</p>
              </li>
            </ul>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            What do the <span>shapes of signs mean?</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={circleOrders} alt="circleOrders" />
                <h2> Circle = Orders</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      Circular signs give orders – they must be followed to stay
                      within the law. Circles with a red border tell you what
                      you must not do (e.g. take a U-turn). Blue circles usually
                      give positive instruction, such as ‘turn left ahead’.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={triangleAhead} alt="triangleAhead" />
                <h2>
                  <span>Triangle = Warning</span>
                </h2>
                <section id={styles.resLists21}>
                  <li>
                    <p>
                      Triangular signs warn. Road signs in the shape of an
                      equilateral triangle are designed to warn you about the
                      road layout or any hazards that lie ahead, such as sharp
                      bends. They almost always have a red border.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
            <div
              className={styles.hazardTestWorkListDiv}
              style={{ display: "block" }}>
              <ul type="none">
                <img src={oneWyroad} alt="one-way" />
                <h2> Rectangle = Information</h2>
                <section id={styles.resLists12}>
                  <li>
                    <p>
                      Rectangular signs inform. Blue rectangular signs give
                      information on motorways, green signs direct you on
                      primary roads, while white signs give directions on minor
                      roads. Rectangular signs can also indicate bus lanes and
                      congestion charge zones.
                    </p>
                  </li>
                </section>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////// */}

        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.imagesHSection}>
          <div id={styles.imagesHSection}>
            <section>
              <img src={stopSign} alt="stopSign" />
              <h2>
                Octagon = <span>Stop Sign</span>
              </h2>
            </section>
            <section>
              <img src={giveWay} alt="giveWay" />
              <h2>
                Inverted Triangle = <span>Give Way.</span>
              </h2>
            </section>
          </div>
        </section>
        {/* ////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 >
            Commonly Confused <span>Road Signs</span>
          </h2>
          <hr />
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            National <span>Speed Limit</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={NoSpeed} alt="NoSpeed" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    A white circular sign with a single black diagonal stripe
                    through it tells you that the national speed limit applies
                    on the upcoming stretch of road. It supersedes any previous
                    speed limit signs you may have had to adhere to, such as
                    passing through temporary roadworks. But what are the
                    national speed limits?
                  </p>
                  <p>
                    Built-up area: On a road where there are street lamps placed
                    no more than 200 yards apart, the speed limit is 30mph for
                    all vehicles. Single carriageway: For cars and vans, the
                    speed limit is 60mph, or 50mph if you’re towing a trailer or
                    caravan. Dual carriageway and motorway: It’s 70mph for cars
                    and vans, or 60mph if you’re towing a trailer or caravan. Of
                    course, even when the national speed limit applies, it might
                    not always be safe to drive at that speed, so use your
                    common sense on this.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            No Waiting/ <span>Urban Clearway</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={capture} alt="capture-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    ‘No waiting’ signs are easily confused with ‘no stopping’
                    signs. Rather than displaying a red cross, they feature a
                    single diagonal red stripe on the same blue background.
                  </p>
                  <p>
                    Drivers are allowed to drop off or pick up a passenger in a
                    no waiting zone, although anything longer is prohibited.
                  </p>
                  <p>
                    The signs are almost always used alongside (or within)
                    rectangular yellow signs which show details of enforcement
                    hours.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            No <span>Motor Vehicles</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={NoMotorVehicle} alt="NoMotorVehicle-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This sign means that you must not drive any motor vehicle
                    down a road where this is displayed. It could be that the
                    area is reserved for pedestrians and cyclists only.
                  </p>
                  <p>
                    This no motor vehicles sign showing a motorbike over a car
                    is sometimes misunderstood to mean only cars and motorcycles
                    are permitted.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            No <span>Overtaking</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={MauritiusRoad} alt="MauritiusRoad-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    There are several reasons why you might see this sign – it
                    is often displayed when the road has poor visibility or if
                    it’s too narrow for safe overtaking.
                  </p>
                  <p>
                    It also warns you when there’s a high risk of vehicles
                    pulling out from parking spaces or driveways that would
                    increase the risk of a head-on collision.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ///////////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            Two-Way Traffic <span> Straight Ahead</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={TwoWayRoad} alt="TwoWayRoad-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    Sometimes you’ll see a red triangular sign with two black
                    arrows pointing in opposite directions. These are used to
                    make you aware that you’re about to leave a separated
                    one-way street and enter a two-way road.
                  </p>
                  <p>
                    If the arrows are positioned vertically, it means the road
                    you’re driving on will soon carry two-way traffic.
                  </p>
                  <p>
                    You should keep to the left-hand side of the road and be
                    aware of oncoming traffic. If they’re horizontal, it
                    indicates that you’ll have to turn either left or right to
                    join the two-way road ahead.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2>
            People Walking <span>Along The Road</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={peopleWalking} alt="peopleWalking-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    A sign showing the silhouette of an adult and child holding
                    hands lets drivers know that pedestrians might be present on
                    the road ahead. Like other warning signs, it appears in a
                    red triangle.
                  </p>
                  <p>
                    A second sign reading ‘No footway for X yds’ may also
                    feature where pedestrians may be in the road for longer
                    distances.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* ////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Road <span>Narrows</span>
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={capture1} alt="capture-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This ‘bottleneck’ sign looks very similar to the ‘dual
                    carriageway ends’ sign, except for one key difference; the
                    vertical lines remain separate despite coming closer
                    together.
                  </p>
                  <p>
                    Pay special attention to nearby road markings, as the width
                    of lanes will begin to change.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* ///////////////////////////////////////////////////////////////// */}
        <section className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            End Of <span>Dual Carriageway</span>{" "}
          </h2>

          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={endDual} alt="endDual-Img" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  <p>
                    This ‘bottleneck’ sign looks very similar to the ‘dual
                    carriageway ends’ sign, except for one key difference; the
                    vertical lines remain separate despite coming closer
                    together.
                  </p>
                  <p>
                    Pay special attention to nearby road markings, as the width
                    of lanes will begin to change.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* /////////////////////////////////////// */}
        <div className={styles.hazardTestWorkListSection}>
          <h2 className={styles.hazardTestH2}>
            Traffic <span>Lights</span>
          </h2>
          <section id={styles.smartlearnerPladges}>
            <p>
              Traffic lights are signalling devices positioned at road
              intersections, pedestrian crossings, and other locations to
              control the flows of traffic. They work in a sequence and
              different colours instruct you to do a different thing. The
              traffic light sequence is as follows;
            </p>
            <hr />
          </section>
          <section className={styles.AdiParttwoDisplayFlex}>
            <div className={styles.hazardTestWorkListDivImg}>
              <img src={traffLights} alt="traffLights" />
            </div>
            <div className={styles.bgColorList}>
              <ul type="none">
                <li>
                  {" "}
                  <p>
                    If a set of traffic lights is out of order then nobody has
                    priority. This means that you should travel very carefully
                    and be ultra-vigilant. There may or may not be a sign
                    telling you that the lights aren’t working, so you need to
                    use your judgment and watch the flow of traffic. At
                    roadworks you may have a temporary set of traffic lights or
                    else traffic can be controlled by a police officer or a
                    ‘stop/go’ board. Police or Traffic officers may signal to
                    you if they’re directing traffic. You MUST obey any signals
                    given by police or traffic officers, traffic wardens, and
                    signs used by school crossing patrols, otherwise known as
                    lollipop ladies. At some locations, such as level crossings,
                    lifting bridges, or outside fire stations, you may see red
                    flashing lights being used, you MUST stop when these show.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* ////////////////////////////////////////////////////////// */}

        <section className={styles.thMultipleChoiceSection}>
          <div className={styles.thMultipleChioceHeader}>
            <h2 className={styles.hazardTestH2}>Car Signals</h2>
          </div>
          <div className={styles.thMultipleChoiceListContainer}>
            <section className={styles.features}>
              <div className={styles.mainFeatures}>
                <div className={styles.column}>
                  <span>
                    <FaArrowsAltH id={styles.featuresIcon} />
                  </span>
                  <h3>Indicating</h3>

                  <p>
                    Indicating is the most common signal you will see and use to
                    tell other drivers that you wish to turn. To avoid confusing
                    other road users you should ensure that your indicators are
                    cancelled after you’ve turned and be aware that another
                    driver may have left their indicator on by mistake.
                  </p>
                </div>
                <div className={styles.column} id={styles.column}>
                  <span>
                    <FaBullhorn id={styles.featuresIcon} />
                  </span>
                  <h3>Car Horn</h3>

                  <p>
                    Another way of signalling your intentions is to use your
                    horn or lights to alert another road user to the fact that
                    you are there. You must not use your horn between 11.30 pm
                    and 7.00 am when driving in a built-up area or when your car
                    is stationary. The only exception to this is if another road
                    user has placed you in danger.
                  </p>
                </div>
                <div className={styles.column}>
                  <span>
                    <FaLightbulb id={styles.featuresIcon} />
                  </span>
                  <h3>Car Lights</h3>

                  <p>
                    Like your horn, headlights are to only be used to alert
                    other road users of your presence. You can use your hazard
                    warning lights briefly to warn drivers behind you that
                    there’s an obstruction ahead if you’re driving on a motorway
                    or unrestricted dual carriageway.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* ////////////////////////////////////// */}
      <section className={styles.mockTestContainerSection}>
        <div className={styles.mockTestHeadingContainerDIv}>
          <h2 style={{ textAlign: "center", color: "red" }}>Test Yourself</h2>
        </div>
        <div className={styles.quizStartDiv}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Road-and-Traffic-Signs">
              {" "}
              <button>Start Quiz</button>
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
