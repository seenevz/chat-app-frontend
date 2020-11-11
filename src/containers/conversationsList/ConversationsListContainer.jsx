import React, { useState, useEffect, useRef } from "react";
import { cableConnection } from "../../ApiAdapter";

import ConversationsListItem from "../../components/ConversationsListItem.jsx";

export default function ConversationsListContainer({ selectConversation }) {
  const [conversations, setConversations] = useState([]);
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
        setConversations(checkAndSetConversations(conversations, payload));
        selectConversation(payload.id);
        setUsernameSearch("");
        break;
      default:
        alert("Error");
        break;
    }
  };

  const checkAndSetConversations = (conversationsArr, newConversation) => {
    if (
      conversationsArr.length &&
      !conversationsArr.some(c => c.id === newConversation.id)
    ) {
      return [...conversationsArr, newConversation];
    } else {
      return conversationsArr;
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

  useEffect(() => {
    conversationsSubscription.current.createConversation(
      newConversationUser.id
    );
  }, [newConversationUser]);

  const handleOnChangeSearch = e => setUsernameSearch(e.target.value);

  return (
    <div className="column box section is-flex is-flex-direction-column is-fixed-height-700px is-horizontal-box">
      <h2 className="title has-colors-reset">Conversations list</h2>
      <div className="field">
        <div className="control">
          <input
            placeholder="Search for user..."
            className="input"
            type="text"
            name="usernameSearch"
            onChange={handleOnChangeSearch}
          />
        </div>
        <div
          className={`dropdown ${usernameSearch.length !== 0 && "is-active"}`}
        >
          <div className="dropdown-menu has-fixed-width-18">
            <div className="dropdown-content">
              {usernameSearchResults[0] &&
                usernameSearchResults.map((user, index) => (
                  <>
                    <a
                      className="dropdown-item"
                      key={user.id * index}
                      onClick={() => setNewConversationUser(user)}
                    >
                      {user.username}
                    </a>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="has-background-light has-overflow-hidden">
        {conversations.map(({ id, title }, index) => (
          <ConversationsListItem
            title={title}
            conversationId={id}
            key={id + index}
            handleClick={selectConversation}
          />
        ))}
      </div>
    </div>
  );
}
