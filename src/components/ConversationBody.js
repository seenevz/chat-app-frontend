import React, { useRef, useEffect } from "react";

import ConversationMessage from "./ConversationMessage";

export default function ConversationBody({ messages, currentUserId }) {
  const ul = useRef(null);

  const anchorScrollBottom = elem => (elem.scrollTop = elem.scrollHeight);

  useEffect(() => {
    anchorScrollBottom(ul.current)
  }, [messages])

  const isFromCurrentUser = (currentUserId, messageUserId) =>
    currentUserId === messageUserId;

  return (
    <div ref={ul} className="section is-flex is-flex-direction-column has-overflow-hidden">
      {messages.map((message, index) => {
        return (
          <ConversationMessage
            message={message}
            key={message.id + index}
            fromCurrentUser={isFromCurrentUser(currentUserId, message.user_id)}
          />
        );
      })}
    </div>
  );
}
