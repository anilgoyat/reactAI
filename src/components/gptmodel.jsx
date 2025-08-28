import { useEffect, useState } from "react";
import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

import TokenEncDecoding from "./tokenencdecoding";
import Tokenvisual from "./tokenvisual";
import TokenDecoding from "./TokenDecoding";

function GptModel() {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");
  const [tokenized, setTokenized] = useState([]);
  const [decodedTokens, setDecodedTokens] = useState([]);
  const [clearTrigger, setClearTrigger] = useState(false);

  // Tokenize input text whenever it changes
  useEffect(() => {
    const enc = new Tiktoken(o200k_base);
    const tokens = enc.encode(inputText);
    setTokenized(tokens);
  }, [inputText]);
  

  // Handle text input change
  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length < 5) {
      setError("Input text must be at least 5 characters.");
    } else {
      setError("");
    }

    setInputText(value);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Text Input */}
        <section className="bg-gray-800/80 rounded-2xl shadow-xl p-6 space-y-4">
          <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
            <span>📝</span>
            <span>Enter Text</span>
          </h2>

          <textarea
            className="w-full h-40 bg-gray-900 border border-gray-700 rounded-xl p-4 text-gray-100 resize-none focus:ring-2 focus:ring-yellow-400 outline-none"
            placeholder="Type or paste text here to tokenize..."
            value={inputText}
            onChange={handleChange}
          />

          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{inputText.length} characters</span>
            <button
              className="px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition"
              onClick={() => { setInputText(""); setClearTrigger(prev => !prev); }}
            >
              🔄 Clear
            </button>
          </div>
        </section>

        {/* API Key + Model Config */}
        <section className="bg-gray-800/80 rounded-2xl shadow-xl p-6 space-y-6">
          <h2 className="text-xl font-bold flex items-center space-x-2 text-white">
            <span>🔑</span>
            <span>API Configuration</span>
          </h2>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">API Key</label>
            <input
              type="password"
              placeholder="Enter your API key"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-gray-100 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Select Model</label>
            <select className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-gray-100 focus:ring-2 focus:ring-purple-500 outline-none">
              <option value="gpt-5">GPT-5</option>
              <option value="gpt-4o-mini">GPT-4o-mini</option>
              <option value="gemini-2.0-flash">Gemini</option>
              <option value="openai">OpenAI</option>
              <option value="google/gemma-7b">Google Gemma</option>
            </select>
          </div>

          <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:scale-105 py-2 rounded-lg font-semibold shadow transition">
            🚀 Submit
          </button>
        </section>
      </div>

      {/* Additional Sections */}
      <div className="grid md:grid-cols-3 gap-6 px-6 pb-10">
        <TokenEncDecoding inputText={tokenized} />
        <TokenDecoding inputText={tokenized} setInputText={setDecodedTokens}  clearTrigger={clearTrigger}/>
        <Tokenvisual inputText={tokenized} />
      </div>
    </>
  );
}

export default GptModel;
