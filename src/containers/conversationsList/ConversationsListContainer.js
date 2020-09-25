import React, { useState, useEffect } from "react";
import { cableConnection } from "../../ApiAdapter";

import ConversationsListItem from "../../components/ConversationsListItem";

export default function ConversationsListContainer({ selectConversation }) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const conversationsSubscription = cableConnection.subscriptions.create(
      "ConversationsChannel",
      {
        connected: () => conversationsSubscription.perform("all_conversations"),
        received: data => setConversations(data),
      }
    );

    return () => conversationsSubscription.unsubscribe();
  }, []);

  return (
    <div className="conversations-list">
      <h2>Conversations list</h2>
      <ul>
        {conversations.map(({ id, title }, index) => (
          <ConversationsListItem
            title={title}
            conversationId={id}
            key={id + index}
            handleClick={selectConversation}
          />
        ))}
      </ul>
    </div>
  );
}
