function intro() {
  const specs = [
    { value: "6,3", label: "Display Super Retina XRD", color: "text-blue-600" },
    { value: "A19 Pro", label: "Chip mais rápido", color: "text-orange-300" },
    { value: "48MP", label: "Sistema de câmera", color: "text-blue-600" },
    { value: "29h", label: "Bateria", color: "text-orange-300" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
        <p className="text-2xl md:text-4xl mb-4 text-gradiente font-bold">
          Estrutura unibody. Eles têm a força.
        </p>
        <p className="text-lg mb:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Apresentamos o iPhone 17 Pro e o iPhone 17 Pro Max. Projetados de
          dentro para fora, eles são os modelos de iPhone mais potentes já
          produzidos. O coração do novo design é a estrutura unibody em alumínio
          forjado a quente que maximiza o desempenho, a capacidade da bateria e
          a durabilidade.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">
          Compre agora
        </button>
        <button className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black text-white text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-white/50 cursor-pointer">
          saiba mais
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105cursor-pointer shadow-lg shadow-gray-900/50 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
            <p>{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default intro;
