import React, { useState } from "react";
import ConversationsListContainer from "../conversationsList/ConversationsListContainer";
import ConversationContainer from "../conversation/ConversationContainer";

export default function HomeContainer({currentUserId}) {
  const [conversationId, setConversationId] = useState(null)

  const selectConversation = (conversationId) => setConversationId(conversationId)
  return (
    <div className="hero-body columns conversations-height">
      <ConversationsListContainer selectConversation={selectConversation} />
      <ConversationContainer
        conversationId={conversationId}
        currentUserId={currentUserId}
      />
    </div>
  );
}
