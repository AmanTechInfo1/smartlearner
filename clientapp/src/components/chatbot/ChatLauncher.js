import React, { useState } from "react";
import Chatbot from "./Chatbot";
import "./ChatLauncher.css";
import { FaCommentDots } from "react-icons/fa";

const ChatLauncher = () => {
  const [isOpened, setIsOpen] = useState(false);

  const toggleChat = () => {
    if (isOpened) {
      localStorage.removeItem("sessionId");
      console.log("❌ sessionId removed on close");
    }
    setIsOpen(!isOpened);
  };

  return (
    <>
      <div onClick={() => setIsOpen((prev) => !prev)} />

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
