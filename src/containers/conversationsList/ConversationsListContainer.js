import React, { useState, useEffect, useRef } from "react";
import { cableConnection } from "../../ApiAdapter";

import ConversationsListItem from "../../components/ConversationsListItem";

export default function ConversationsListContainer({ selectConversation }) {
  const [conversations, setConversations] = useState([]);
  const [newConversation, setNewConversation] = useState(true);
  const [usernameSearch, setUsernameSearch] = useState("");
  const [usernameSearchResults, setUsernameResults] = useState([]);
  const [newConversationUser, setNewConversationUser] = useState({});

  const conversationsSubscription = useRef(
    cableConnection.subscriptions.create("ConversationsChannel", {
      connected: () =>
        conversationsSubscription.current.perform("all_conversations"),
      received: data => handleRecieveMessage(data),
      findUser: username =>
        conversationsSubscription.current.perform("find_user_by_match", {
          message: username,
        }),
      createConversation: user_id =>
        conversationsSubscription.current.perform("create_conversation", {
          message: user_id,
        }),
    })
  );

  const handleRecieveMessage = ({ action, payload }) => {
    switch (action) {
      case "all_conversations":
        setConversations(payload);
        break;
      case "find_user_by_match":
        setUsernameResults(payload);
        break;
      case "create_conversation":
        setConversations([...conversations, payload]);
        selectConversation(payload.id);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    return () => conversationsSubscription.current.unsubscribe();
  }, []);

  useEffect(() => {
    if (usernameSearch !== "") {
      conversationsSubscription.current.findUser(usernameSearch);
    }
  }, [usernameSearch]);

  const toggleNewConversation = () => setNewConversation(state => !state);

  const handleOnChangeSearch = e => setUsernameSearch(e.target.value);

  const handleCreateConversation = () => {
    conversationsSubscription.current.createConversation(
      newConversationUser.id
    );
  };

  return (
    <div className="column box section is-flex is-flex-direction-column is-fixed-height is-horizontal-box">
      <h2 className="title">Conversations list</h2>
      <div className="block">
        <button onClick={toggleNewConversation} className="button">
          New Conversation
        </button>
      </div>
      {newConversation ? (
        <div>
          {conversations.map(({ id, title }, index) => (
            <ConversationsListItem
              title={title}
              conversationId={id}
              key={id + index}
              handleClick={selectConversation}
            />
          ))}
        </div>
      ) : (
        <>
          <label>
            Search for username:
            <input
              name="usernameSearch"
              value={usernameSearch}
              onChange={handleOnChangeSearch}
            />
          </label>
          <p>create conversation with: {newConversationUser.username}</p>
          <ul>
            {usernameSearchResults.map((user, index) => (
              <li
                key={user.id + index}
                onClick={() => setNewConversationUser(user)}
              >
                {user.username}
              </li>
            ))}
          </ul>
          <button onClick={handleCreateConversation}>
            Create Conversation
          </button>
        </>
      )}
    </div>
  );
}
