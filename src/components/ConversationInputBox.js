import React, { useState } from "react";

export default function ConversationInputBox() {
  const [form, setForm] = useState({ message: null });

  const handleFormInput = ({ target }) =>
    setForm({ [target.name]: target.value });

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleFormInput}
          name="message"
          value={form.message}
        />
        <input type="submit" value="Send!" />
      </form>
    </div>
  );
}
