function NavBar() {
  return (
    <nav className="fixed flex justify-center items-center top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl max-auto px-1 py-1 flex  items-center justify-center gap-8 ">
        <a href="#" className="text-gray-400 hover:text-gray-100">
          Loja
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-100">
          Mac
        </a>

        <a href="#design" className="text-gray-400 hover:text-gray-100">
          {" "}
          Design
        </a>
        <a href="#camera" className="text-gray-400 hover:text-gray-100">
          {" "}
          Câmera
        </a>
        <a href="#performance" className="text-gray-400 hover:text-gray-100">
          {" "}
          performance
        </a>
        <a href="#cores" className="text-gray-400 hover:text-gray-300">
          {" "}
          Cores
        </a>
        <a href="#footer" className="text-gray-400 hover:text-gray-100">
          Footer
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-100">
          Suporte
        </a>
        {/* <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
          Comprar
        </button> */}
      </div>
    </nav>
  );
}
export default NavBar;
