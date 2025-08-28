    function TokenEncDecoding({inputText}) {
        return (
            <>
                  {/* Encoding + Decoding */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Token Encoding */}
          <section className="bg-gray-800/80 rounded-2xl shadow-xl p-6 space-y-4">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <span>🔢</span>
              <span>Token Encoding</span>
            </h2>
            <div className="h-32 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center text-gray-500">
            {inputText.length > 0 ? inputText.join(" ") : "Encoded tokens will appear here..."}
            </div>
          </section>

        </div>
            </>
            
        );
    }

    export default TokenEncDecoding;