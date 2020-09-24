import React, { useContext } from "react";
import ConversationsListContainer from "../conversationsList/ConversationsListContainer";
import ConversationContainer from "../../components/ConversationContainer";
import { cableConnection } from "../../ApiAdapter";

import "./Home.css";

export default function HomeContainer() {
  const convosSubscription = cableConnection.subscriptions.create({
    channel: "ConversationsChannel",
    user_id: 1,
  });
  return (
    <div className="home-container">
      <ConversationsListContainer />
      <ConversationContainer />
    </div>
  );
}
