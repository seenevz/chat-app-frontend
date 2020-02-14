import React from "react";
import ConversationBody from "../containers/conversation/ConversationBody";
import ConversationInputBox from "./ConversationInputBox";

export default function ConversationContainer() {
  return (
    <div className="conversation-container">
      <h1>Conversation id: </h1>
      <ConversationBody />
      <ConversationInputBox />
    </div>
  );
}
