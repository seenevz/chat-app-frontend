import React, { useRef } from "react";

export default function ConversationInputBox({
  messageInput,
  handleInput,
  handleSubmit,
}) {
  const form = useRef(null);

  const handleKeyPress = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.current.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} ref={form}>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <textarea
              rows={1}
              onKeyPress={handleKeyPress}
              placeholder="type in your message..."
              className="textarea has-fixed-size"
              type="text"
              onChange={handleInput}
              name="message"
              value={messageInput}
            />
          </div>
          <div className="control">
            <input className="button" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}
