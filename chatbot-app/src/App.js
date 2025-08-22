import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!query.trim()) return;

    // Add user message to chat
    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:8000/chat/${encodeURIComponent(query)}`);
      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { sender: "bot", text: data.output }]);
      } else {
        throw new Error(data.output || "Error from backend");
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}: </strong>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="chat-message bot">Loading...</div>}
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={query}
          placeholder="Type your message..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default App;