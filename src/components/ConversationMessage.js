import React from "react";

export default function ConversationMessage({
  message: { text },
  fromCurrentUser,
}) {
  return (
    <div
      className={`column media is-three-quarters ${
        fromCurrentUser
          ? "has-background-primary is-align-self-flex-end"
          : "has-background-grey-lighter"
      }`}
    >
      {text}
    </div>
  );
}
