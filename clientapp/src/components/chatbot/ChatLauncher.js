import React, { useEffect, useState } from "react";
import Chatbot from "./Chatbot";
import "./ChatLauncher.css";
import { FaCommentDots } from "react-icons/fa";
import poppupImg from "../../assets/images/IMG_2423.JPG";
const ChatLauncher = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const toggleChat = () => {
    if (!isOpened) {
      setShowPopup(false); // Hide popup when user opens the chat
    } else {
      localStorage.removeItem("sessionId");
      console.log("❌ sessionId removed on close");
    }
    setIsOpen(!isOpened);
  };

  return (
    <>
      {/* Popup */}
      {showPopup && !isOpened && (
        <div className="chat-popup">
          <div className="chat-popup-arrow" />
          <p>
            👋 Welcome to the <strong>SmartLearner</strong> live chat,
            <br />
            how can we help you today?
          </p>
          <img src={poppupImg} alt="popup" />
        </div>
      )}

      {isOpened && (
        <div className="chat-window">
          <Chatbot />
        </div>
      )}

      <div className="chat-launcher" onClick={toggleChat}>
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
