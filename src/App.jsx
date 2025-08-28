import NavBar from "./components/Navbar";
import GptModel from "./components/gptmodel";
function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 min-h-screen font-sans">
        <NavBar />

        <main className="max-w-6xl mx-auto p-8 space-y-10">
          <GptModel />

        </main>
      </div>
    </>
  );
}

export default App;
