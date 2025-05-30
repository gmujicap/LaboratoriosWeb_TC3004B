// App.jsx
import React from "react";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = ""; // PONER API KEY AQUI

  const handleSend = async () => {
    setLoading(true);
    setResponse(""); 

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: userInput,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Error ${res.status}: ${errorData.error?.message || "Solicitud fallida"}`
        );
      }

      const data = await res.json();
      const aiReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "La IA no devolvió una respuesta.";

      setResponse(aiReply);
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Ocurrió un error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Interfaz con IA</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Escribe tu mensaje para la IA..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br />
      <button onClick={handleSend} disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
      <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
        <strong>Respuesta:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;