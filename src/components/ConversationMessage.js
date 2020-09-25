import React from "react";

export default function ConversationMessage({ message: { text }, fromCurrentUser }) {
  return <li className={fromCurrentUser ? "current-user" : null}>{text}</li>;
}
