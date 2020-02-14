import React from "react";
import ConversationListContainer from "../conversationList/ConversationListContainer";
import ConversationContainer from "../../components/ConversationContainer";
import "./Home.css";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <ConversationListContainer />
      <ConversationContainer />
    </div>
  );
}
