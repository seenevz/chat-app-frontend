import React from "react";

export default function ConversationMessage({ message: { text }, fromCurrentUser }) {
  return (
    <div className={`media ${fromCurrentUser ? "is-offset-one-half" : null}`}>
      {text}
    </div>
  );
}
