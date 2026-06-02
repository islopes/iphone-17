function MainContent() {
  return (
    <div id="camera" className="text-center py-20 px-6 ">
      <h3 className="text-4xl fonte-bold mb-10">
        Sistema de câmera Pro avançado
      </h3>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer ">
          <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
          <h4 className="text-xl font-semibold mb-2">Principal</h4>
          <p className="text-gray-400">Sensor quad-pixel com foco automãtico</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="text-4xl font-bold text-orange-600 mb-4">12MP</div>
          <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
          <p className="text-gray-400">
            Campo de visão de 120° com modo noturno
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
          <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
          <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
