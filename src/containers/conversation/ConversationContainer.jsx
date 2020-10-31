import React, { useEffect, useState, useRef } from "react";
import { cableConnection } from "../../ApiAdapter";
import ConversationBody from "../../components/ConversationBody.jsx";
import ConversationInputBox from "../../components/ConversationInputBox.jsx";

export default function ConversationContainer({
  conversationId,
  currentUserId,
}) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const messagesSubscription = useRef({});

  useEffect(() => {
    messagesSubscription.current = cableConnection.subscriptions.create(
      {
        channel: "MessagesChannel",
        conversation: conversationId,
      },
      {
        connected: () => messagesSubscription.current.perform("all_messages"),
        received: data => handleReceiveMessage(data),
        send_message: message =>
          messagesSubscription.current.perform("create_message", { message }),
      }
    );

    return () => messagesSubscription.current.unsubscribe();
  }, [conversationId]);

  const handleReceiveMessage = ({action, payload}) => {
    switch (action) {
      case 'all_messages':
        setMessages(payload)
        break;
      case 'create_message':
        setMessages(state => [...state, payload])
      default:
        break;
    }
  }

  const handleFormInput = e => {
    setMessageInput(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    messagesSubscription.current.send_message(messageInput);
    setMessageInput("");
  };

  return (
    <div className="section box column is-three-quarters is-fixed-height-700px">
      <h1 className="title has-colors-reset">Conversation id: {conversationId}</h1>
      <ConversationBody messages={messages} currentUserId={currentUserId} />
      <ConversationInputBox
        handleInput={handleFormInput}
        handleSubmit={handleFormSubmit}
        messageInput={messageInput}
      />
    </div>
  );
}
