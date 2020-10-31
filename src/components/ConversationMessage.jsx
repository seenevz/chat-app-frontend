import React from "react";

export default function ConversationMessage({
  message: { text },
  fromCurrentUser,
}) {

  return (
    <div
      className={`column media is-three-fifths ${
        fromCurrentUser
          ? "has-background-primary is-align-self-flex-end"
          : "has-background-grey-lighter"
      }`}
    >
      <p className="media-content" style={{ whiteSpace: "pre-line" }}>
        {text}
      </p>
    </div>
  );
}
