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
    setShowPopup(true);
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
              Welcome to the <strong>SmartLearner</strong> live chat,
              <br />
              how can we help you today?
            </em>
          </p>
          <iframe
            src="https://lottie.host/embed/4e40f25c-e8c1-433d-8504-5a0e481a807f/xq2cmgA4Zw.lottie"
            width="200px"
            height="130px"></iframe>
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
