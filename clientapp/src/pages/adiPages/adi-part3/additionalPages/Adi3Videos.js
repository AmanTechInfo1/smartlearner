import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import backgroundImage from "../../../../assets/images/adi3videos.jpg";

export default function Adi3Videos() {
  const textRef = useRef(null);

  // Function to split the text into individual letters wrapped in <span>
  const splitText = () => {
    const firstPart = "Adi part 3 Videos"; // First part before "Driving"

    // Split both parts into individual characters and map them to <span>
    const firstLine = firstPart
      .split("")
      .map((char, index) => <span key={`first-${index}`}>{char}</span>);

    // Return the first line, a <br>, and then the second line
    return <>{firstLine}</>;
  };

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    // GSAP Timeline for the text animation
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(letters, {
      opacity: 0.6,
      y: 100,
      ease: "bounce.out", // Start from below
      stagger: 0.1, // Stagger the animation for each letter
      rotationX: 90, // Initial rotation effect
      transformOrigin: "bottom center", // Center for rotation
      scale: 0.5,
    })
      .to(letters, {
        scale: 1, // Scale to normal size
        opacity: 1, // Fade in to full opacity
        rotationX: 0, // Reset rotation
        y: 0, // Move to original position
        stagger: 0.1, // Slight stagger for each letter
        duration: 0.8, // Smooth transition duration
      })
      .to(letters, {
        color: "#fd9235", // Change text color to red
        rotationY: 360, // Apply rotation on the Y-axis
        stagger: 0.1,
        duration: 1, // Rotate each letter over 1 second
      })
      .to(letters, {
        scale: 1.2, // Slightly enlarge text
        opacity: 0.8, // Reduce opacity slightly
        rotationX: -10, // Slight tilt effect
        stagger: 0.1, // Stagger the scaling
        duration: 1, // Animation duration
      })
      .to(letters, {
        scale: 1, // Return to original scale
        opacity: 1, // Full opacity
        rotationX: 0, // Reset rotation
        color: "#04fad4", // Reset color to black
        stagger: 0.1, // Maintain stagger effect
        duration: 1, // Final duration
      })
      .to(letters, {
        rotation: 10, // Add shake effect
        x: -5, // Horizontal shake
        yoyo: true, // Yoyo effect for shake (goes back and forth)
        repeat: 2, // Repeat the shake twice
        duration: 0.1, // Short shake duration
        stagger: 0.05, // Stagger shake on each letter
      })
      .to(letters, {
        scale: 1.3, // Increase size slightly for bounce effect
        opacity: 1, // Ensure opacity stays full
        ease: "bounce.out", // Bounce easing for effect
        stagger: 0.05, // Stagger bounce
        duration: 1, // Bounce duration
      })
      .to(letters, {
        scale: 1, // Reset scale
        opacity: 1, // Reset opacity
        y: -30, // Vertical movement for final bounce
        duration: 0.5, // Short duration for final bounce
      })
      // Infinite color change with loop
      .to(letters, {
        color: "#ff54d7", // Change color to a pinkish hue
        duration: 2, // Duration of color change
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse color change for alternating effect
        stagger: 0.1, // Stagger the color change for each letter
      });
  }, []);

  const videoURLs = [
    "https://www.youtube.com/embed/voP165d_Vak",
    "https://www.youtube.com/embed/5TejFMpXXdk",
    "https://www.youtube.com/embed/nKup6MspIx0",
    "https://www.youtube.com/embed/z0_U61zG4dI",
    "https://www.youtube.com/embed/Oskqy7_ZpVA",
    "https://www.youtube.com/embed/KnL-BYM2dKw",
    "https://www.youtube.com/embed/Z0yo2TjJwww",
    "https://www.youtube.com/embed/_CZw4BryhGI",
    "https://www.youtube.com/embed/_MqygK1Dq7A",
    "https://www.youtube.com/embed/TniF-FH7Yxc",
    "https://www.youtube.com/embed/GFc3vzymSHM",
    "https://www.youtube.com/embed/JJn7ND4Xxos",
    "https://www.youtube.com/embed/69CeNTW1TvE",
    "https://www.youtube.com/embed/5hrmbP59ov8",
    "https://www.youtube.com/embed/da__4gZJr6A",
    "https://www.youtube.com/embed/dI06Xz0Xy1E",
    "https://www.youtube.com/embed/dlYO5uD0Lyc",
    "https://www.youtube.com/embed/RwyzvoWACxs",
    "https://www.youtube.com/embed/5BtyVoEYi7Y",
    "https://www.youtube.com/embed/qYdhiEXfmt8",
    "https://www.youtube.com/embed/mTJ45L4Ksdk",
    "https://www.youtube.com/embed/p9nArUzvBUQ",
    "https://www.youtube.com/embed/u9TF_TQ9iZQ",
    "https://www.youtube.com/embed/6aTAPdPu1jo",
    "https://www.youtube.com/embed/k0xvLyB03lo",
    "https://www.youtube.com/embed/VDui3vq6hFk",
    "https://www.youtube.com/embed/_I2c20gJlsw",
    "https://www.youtube.com/embed/M3nLt_SCpuM",
    "https://www.youtube.com/embed/uPKcxrcdTcI",
    "https://www.youtube.com/embed/ZVxnHmALzJ4",
    "https://www.youtube.com/embed/9i2jtjDHqlM",
    "https://www.youtube.com/embed/pM34_NmzIag",
    "https://www.youtube.com/embed/ncw4tPr4wJo",
    "https://www.youtube.com/embed/YeNMi5sN_uo",
    "https://www.youtube.com/embed/z_Jz84zBIxc",
    "https://www.youtube.com/embed/O-MubDB_qng",
    "https://www.youtube.com/embed/34g9SZuOy7k",
    "https://www.youtube.com/embed/h4LGen5ic_4",
    "https://www.youtube.com/embed/W7T5-lMbw7Q",
    "https://www.youtube.com/embed/0QzUOvw4Xjo",
    "https://www.youtube.com/embed/KE936GRRRUk",
    "https://www.youtube.com/embed/weUCo2vnYIk",
    "https://www.youtube.com/embed/To8ziitW1v8",
    "https://www.youtube.com/embed/7ka_dx1jUGA",
    "https://www.youtube.com/embed/o9muCTSrbKU",
    "https://www.youtube.com/embed/bOsan5fCy-8",
    "https://www.youtube.com/embed/ZhrMFuJIvSQ",
    "https://www.youtube.com/embed/AApwhdpgDSg",
    "https://www.youtube.com/embed/4-ItAzv4koE",
    "https://www.youtube.com/embed/Mfsp5T8RBx0",
    "https://www.youtube.com/embed/QTgnO-rVu9s",
    "https://www.youtube.com/embed/QoJqpqFsAO4",
    "https://www.youtube.com/embed/oTSq725wP-Q",
    "https://www.youtube.com/embed/7be-irjDQQ8",
    "https://www.youtube.com/embed/Hxy1c_nJwp0",
    "https://www.youtube.com/embed/_nXUlRhagag",
    "https://www.youtube.com/embed/_nXUlRhagag",
    "https://www.youtube.com/embed/bfNWsJpeZoM",
    "https://www.youtube.com/embed/79ISXySHUL4",
    "https://www.youtube.com/embed/m5GpAC3kQjY",
    "https://www.youtube.com/embed/feiGFeaHoOs",
    "https://www.youtube.com/embed/uP__51HXOAM",
    "https://www.youtube.com/embed/fZ1tXWu_25A",
    "https://www.youtube.com/embed/6HFZuV51X4o",
    "https://www.youtube.com/embed/mmBEB-tAXzA",
    "https://www.youtube.com/embed/-8syVRiEVJs",
    "https://www.youtube.com/embed/dBi_K3FKQKg",
    "https://www.youtube.com/embed/v8Ijlll4CxA",
    "https://www.youtube.com/embed/CxE9vCOPUXo",
    "https://www.youtube.com/embed/CwLxMpgo3z8",
    "https://www.youtube.com/embed/ZywSJtUJ8PY",
    "https://www.youtube.com/embed/xZJlwvFKjGA",
    "https://www.youtube.com/embed/4K00oQDw7vs",
    "https://www.youtube.com/embed/EIdyprnki9A",
    "https://www.youtube.com/embed/g9WeZjQ0j30",
    "https://www.youtube.com/embed/m2I3jaikL3s",
    "https://www.youtube.com/embed/kyuFNV40-sQ",
    "https://www.youtube.com/embed/gO7BUvs3ppQ",
    "https://www.youtube.com/embed/ZHGdqXMROIY",
    "https://www.youtube.com/embed/Cq4HttIjFuA",
    "https://www.youtube.com/embed/YjJ1ERBMtlA",
    "https://www.youtube.com/embed/ysUo5j6O1C4",
    "https://www.youtube.com/embed/JmoPSe5l9sA",
    "https://www.youtube.com/embed/u9Eqd_Y33fc",
    "https://www.youtube.com/embed/KEtEkQSTfCY",
    "https://www.youtube.com/embed/Cz4p3ZQA_d4",
    "https://www.youtube.com/embed/0y5t-WQnNQU",
    "https://www.youtube.com/embed/i5Qy8xLJlto",
    "https://www.youtube.com/embed/BvkhdTdbLLQ",
    "https://www.youtube.com/embed/c3_L6HRbLuM",
    "https://www.youtube.com/embed/ByYa-N3VxwQ",
    "https://www.youtube.com/embed/MZwinuvL9HM",
    "https://www.youtube.com/embed/I0JKMN2xsy4",
    "https://www.youtube.com/embed/6U5oYCPQaPg",
    "https://www.youtube.com/embed/d_nDbVzu3Mk",
    "https://www.youtube.com/embed/7X98X4WyGyw",
    "https://www.youtube.com/embed/MkDw1ESJuFU",
    "https://www.youtube.com/embed/1jsftw9ZRKs",
    "https://www.youtube.com/embed/eh545_LiBeo",
    "https://www.youtube.com/embed/HSJA0Pq2o_k",
    "https://www.youtube.com/embed/Ic6etg36oFo",
    "https://www.youtube.com/embed/RW823rokfuw",
    "https://www.youtube.com/embed/nuWgReBy95Q",
    "https://www.youtube.com/embed/f5mPsbve1jw",
    "https://www.youtube.com/embed/5TbEhHWQo84",
    "https://www.youtube.com/embed/0Wf8m_UdsMw",
    "https://www.youtube.com/embed/mzxcQIeZ35Q",
    "https://www.youtube.com/embed/da8gHMDX8r0",
    "https://www.youtube.com/embed/GPnaj7p10_w",
    "https://www.youtube.com/embed/E7CF8_lye-o",
    "https://www.youtube.com/embed/QQPv9Uw5tAM",
    "https://www.youtube.com/embed/l25qpbCPdI8",
    "https://www.youtube.com/embed/fQZnKjkHvxg",
    "https://www.youtube.com/embed/OxSQAEArlnM",
    "https://www.youtube.com/embed/rnvf_VQHGjA",
    "https://www.youtube.com/embed/EUTwW9wTLbg",
    "https://www.youtube.com/embed/F-3gn9cw7mU",
    "https://www.youtube.com/embed/rLb4ryBfHnQ",
  ];
  const [visibleCount, setVisibleCount] = useState(10); // start with 10

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className={styles.AdiModuleOnecontainer}>
      <section
        className={styles.AdiModuleOneheader}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}>
        <div className="opicity"></div>
        <section className={styles.AdiModuleOneheading}>
          {" "}
          <h1 ref={textRef}>{splitText()}</h1>
        </section>
      </section>
      <h2 className={styles.videotitle2}>Watch Our Video</h2>

      <div className={styles.videoContainer2}>
        {videoURLs.slice(0, visibleCount).map((url, index) => (
          <div className={styles.videodesign2} key={index}>
            <iframe
              width="100%"
              height="270px"
              src={url}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        ))}
      </div>
      {visibleCount < videoURLs.length && (
        <div className={styles.loadMoreWrapperVideo}>
          <button className={styles.loadMoreBtnVideo} onClick={loadMore}>
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
}
