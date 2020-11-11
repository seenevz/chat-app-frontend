import React, { useState } from "react";
import ConversationsListContainer from "../conversationsList/ConversationsListContainer.jsx";
import ConversationContainer from "../conversation/ConversationContainer.jsx";
import { useEffect } from "react";

export default function HomeContainer({ currentUserId }) {
  const [conversationId, setConversationId] = useState(null);

  const selectConversation = conversationId =>
    setConversationId(conversationId);

  useEffect(() => console.log(conversationId), [conversationId]);
  
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
