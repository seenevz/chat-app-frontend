import React, { useState } from "react";
import ConversationsListContainer from "../conversationsList/ConversationsListContainer.jsx";
import ConversationContainer from "../conversation/ConversationContainer.jsx";

export default function HomeContainer({currentUserId}) {
  const [conversationId, setConversationId] = useState(null)

  const selectConversation = (conversationId) => setConversationId(conversationId)
  return (
    <div className="hero-body columns">
      <ConversationsListContainer selectConversation={selectConversation} />
      <ConversationContainer
        conversationId={conversationId}
        currentUserId={currentUserId}
      />
    </div>
  );
}