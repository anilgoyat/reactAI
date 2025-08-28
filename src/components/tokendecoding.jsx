import { useState,useEffect } from "react";
import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

function TokenDecoding({inputText, setInputText,clearTrigger }) {
  const [tokenString, setTokenString] = useState("");
  const [decodedOutput, setDecodedOutput] = useState("");

  const handleClick = () => {
    try {
      const enc = new Tiktoken(o200k_base);
      const decoded = enc.decode(inputText);

      setDecodedOutput(decoded);
      setInputText(decoded);
    } catch (err) {
      setDecodedOutput("⚠️ Invalid token input");
    }
  };

  useEffect(() => {
     setDecodedOutput("");
  }, [clearTrigger]);

  return (
    <section className="bg-gray-800/80 rounded-2xl shadow-xl p-6 space-y-4">
      <h2 className="text-lg font-semibold flex items-center space-x-2">
        <span>🔄</span>
        <span>Token Decoding</span>
      </h2>

      <input
        type="text"
        value={tokenString}
        onChange={e => setTokenString(e.target.value)}
        placeholder="e.g., 72, 101, 108, 108, 111"
        className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 outline-none"
      />

      <div className="h-32 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center text-gray-300 px-4 text-center">
        {decodedOutput || "Decoded output will appear here"}
      </div>

      <button
        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:scale-105 py-2 rounded-lg font-semibold shadow transition"
        onClick={handleClick}
      >
        🔄 Decode
      </button>
    </section>
  );
}

export default TokenDecoding;
