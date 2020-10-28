import React from "react";

export default function ConversationInputBox({
  messageInput,
  handleInput,
  handleSubmit,
}) {
  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            type="text"
            onChange={handleInput}
            name="message"
            value={messageInput}
          />
        </label>

        <input type="submit" value="Submit"  />
      </form>
    </div>
  );
}
