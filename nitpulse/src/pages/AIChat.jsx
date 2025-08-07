import React, { useState } from "react";

const AIChat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  // 🔹 Send Text Question
  const handleAsk = async () => {
    if (!question.trim()) return;
    const newMessages = [...messages, { sender: "user", text: question }];
    setMessages(newMessages);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch('https://nitpulse-backend.onrender.com/api/huggingface/generate-text', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages([...newMessages, { sender: "ai", text: data.answer }]);
    } catch {
      setMessages([...newMessages, { sender: "ai", text: "Error: Could not get an answer." }]);
    }
    setLoading(false);
  };

  // 🔹 Voice Input (Whisper API)
  const handleVoiceInput = async () => {
    if (!navigator.mediaDevices) {
      alert("Voice recording not supported on this browser");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("audio", audioBlob);

      setLoading(true);
      try {
        const res = await fetch("/api/voice", { method: "POST", body: formData });
        const data = await res.json();
        if (data.text) {
          setQuestion(data.text);
          handleAsk();
        }
      } catch {
        alert("Voice processing failed");
      }
      setLoading(false);
    };

    mediaRecorder.start();
    setRecording(true);
    setTimeout(() => {
      mediaRecorder.stop();
      setRecording(false);
    }, 4000);
  };

  // 🔹 Image Generation
  const handleGenerateImage = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });
      const data = await res.json();
      if (data.image) {
        setImageUrl(data.image);
        setMessages([...messages, { sender: "ai", text: "Generated Image Below 👇" }]);
      }
    } catch {
      alert("Image generation failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-white pt-24">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 my-4">
        <img src="ai-logo1.jpg" alt="NIT Pulse AI logo" className="w-11 h-11 rounded-full" />
        <h2 className="text-3xl font-bold text-black">Ask NIT Pulse AI</h2>
      </div>

      {/* Chat Window */}
      <div className="bg-gray-300 p-4 rounded-xl shadow-md w-full max-w-5xl mx-auto mb-2 h-96 overflow-y-auto px-2 sm:px-2 md:px-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 my-2 max-w-[80%] rounded-lg ${
              msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-100 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="bg-gray-100 p-2 text-black rounded-lg w-fit">Typing...</div>}
        {imageUrl && (
          <div className="mt-4">
            <img src={imageUrl} alt="Generated" className="rounded-lg shadow-md max-w-full" />
          </div>
        )}
      </div>

      {/* ✅ Bottom Bar Like Screenshot */}
      <div className="fixed bottom-5 w-full flex justify-center px-2 sm:px-2 md:px-2">
  <div className="bg-gray-300 rounded-full shadow-md w-full max-w-5xl p-1.5 flex items-center gap-2">

        {/* 🖼 Image Button */}
        <button
          onClick={handleGenerateImage}
          className="w-10 h-9 flex items-center justify-center bg-gray-700 rounded-full text-xl text-white hover:bg-gray-600"
        >
          🖼
        </button>

        {/* Input */}
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
          className="flex-1 bg-gray-800 text-white px-4 py-1.5 rounded-full placeholder-gray-400 outline-none"
        />

        {/* 🎤 Mic Button */}
        <button
          onClick={handleVoiceInput}
          className={`w-10 h-9 flex items-center justify-center rounded-full text-xl text-white ${
            recording ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          🎙

        </button>

        {/* ⏺ Send Button */}
        <button
          onClick={handleAsk}
          className="w-10 h-9 flex items-center justify-center bg-blue-600 rounded-full text-xl text-white hover:bg-blue-700"
        >
         ⬆
 
        </button>
      </div>
      </div>
    </div>
  );
};

export default AIChat;