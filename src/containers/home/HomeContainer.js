import React, { useState } from "react";
import ConversationsListContainer from "../conversationsList/ConversationsListContainer";
import ConversationContainer from "../conversation/ConversationContainer";

export default function HomeContainer({currentUserId}) {
  const [conversationId, setConversationId] = useState(null)

  const selectConversation = (conversationId) => setConversationId(conversationId)
  return (
    <div className="home-container">
      <ConversationsListContainer selectConversation={selectConversation}/>
      <ConversationContainer conversationId={conversationId} currentUserId={currentUserId}/>
    </div>
  );
}
