function NavBar(){

      return (
    <>
          {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-800/70 backdrop-blur-md shadow-lg">
        <h1 className="text-2xl font-extrabold text-yellow-400">
          ⚡ Custom Tokenizer
        </h1>
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform"
        >
          GitHub
        </a>
      </nav>
    </>

)}

export default NavBar;