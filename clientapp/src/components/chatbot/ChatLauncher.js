import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import "./ChatLauncher.css";
import { FaCommentDots } from "react-icons/fa";
import poppupImg from "../../assets/images/IMG_2423.JPG";
import { useRef } from "react";

const ChatLauncher = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const chatWindowRef = useRef(null);
  const launcherRef = useRef(null);

  useEffect(() => {
    // Check if the popup has already been shown (on page refresh)
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      setIsOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpened &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        launcherRef.current &&
        !launcherRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpened]);

  const toggleChat = () => {
    if (!isOpened) {
      setShowPopup(false); // Hide popup when user opens the chat
    }
    setIsOpen(!isOpened);
  };

  return (
    <>
      {/* Popup */}
      {showPopup && !isOpened && (
        <div className="chat-popup" onClick={() => setShowPopup(false)}>
          <div className="chat-popup-arrow" />
          <p>
            <span style={{ fontSize: "1.3rem" }}> 😊</span>{" "}
            <em>
              Can't find anything what you look for. Ask our{" "}
              <strong>SmartBot</strong>
              <br />
            </em>
          </p>
          <div
            className="iframe-click-overlay"
            onClick={() => setShowPopup(false)}></div>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1110115201?h=c2724c5c32&autoplay=1&muted=1&loop=1&playsinline=1&background=1"
            width="100%"
            height="250"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowfullscreen></iframe>
        </div>
      )}

      {isOpened && (
        <div className="chat-window" ref={chatWindowRef}>
          <Chatbot />
        </div>
      )}

      <div className="chat-launcher" ref={launcherRef} onClick={toggleChat}>
        {isOpened ? (
          <span style={{ color: "white", textDecoration: "none" }}>✖</span>
        ) : (
          "💬"
        )}
      </div>
    </>
  );
};

export default ChatLauncher;
