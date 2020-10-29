import React from "react";

export default function ConversationsListItem({
  conversationId,
  title,
  handleClick,
}) {
  return (
    <div className="media">
      <div className='media-left'>
      avatar
      </div>
      <div className="media-content">
        <button
          className="button is-white"
          onClick={() => handleClick(conversationId)}
        >
          {title}
        </button>
      </div>
    </div>
  );
}
