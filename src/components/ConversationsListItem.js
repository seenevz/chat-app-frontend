import React from "react";

export default function ConversationsListItem({ conversationId, title, handleClick }) {
  return (
    <li>
      <button onClick={() => handleClick(conversationId)}>{title}</button>
    </li>
  );
}
