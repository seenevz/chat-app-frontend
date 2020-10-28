import React from "react";

export default function ConversationsListItem({ conversationId, title, handleClick }) {
  return (
    <li>
      <button
        className="button is-text"
        onClick={() => handleClick(conversationId)}
      >
        {title}
      </button>
    </li>
  );
}
