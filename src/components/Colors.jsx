import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: "../../public/img/iphone-17-pro-blue.png",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Prata",
      image: "../../public/img/iphone-17-pro-silver.png",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Orange",
      image: "../../public/img/iphone-17-pro-orange.png",
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screem: "6,9 polegadas com ProMotion 120Hz e Always-On Display",
      storage: "256GB, 512GB ou 1TB",
      battery: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screem: "6,3 polegadas com ProMotion 120Hz e Always-On Display",
      storage: "128GB, 256GB ou 512GB",
      battery: "29h de vídeo",
      weight: "199g",
    },
  ];

  const [selectedcolor, setSelectedColor] = useState("blue");

  return (
    <section id="colors" className="bg-black py-20 px-8" id="cores">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos em titânio refinado
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative  w-full max-w-md">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectedcolor).image}
                alt="iphone 17"
                className="max-w-full max-h-[600px] max-auto"
              ></img>
            </div>

            {/**/}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full blackdrop-blur-md bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedcolor).name}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedcolor === color.id ? "border-white" : " border-gray-600"}`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          {" "}
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-900 "
            >
              <div className="m-3 text-2xl">📱</div>
              <h3 className="text-2xl fonte-bold m-2">{model.name}</h3>
              <p className="text-gray-400">Tela: {model.screem}</p>
              <ul className="text-gray-300 mt-4 list-disc list-inside">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}{" "}
        </div>
        <div className="text-center mt-12 ">
          <button className="bg-blue-600 p-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 cursor-pointer text-lg font-medium mb-3">
            Compre agora a partir de R$ 9.150
          </button>
          <p className="mt-2 text-gray-300">
            Ou em até 12x de R$ 774,92 sem juros
          </p>
        </div>
      </div>
    </section>
  );
}
export default Colors;
