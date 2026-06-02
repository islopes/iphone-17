function Highlights() {
  return (
    <section className="bg-black py-20 px-6 flex justify-center " id="design">
      <div className="max-w-7xl max-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl fonte-bold mb-4">
            Tudo de tudo, no iPhone que é tudo.
          </h2>
          <p>Cada detalhe foi pensado para criar a melhor experiência</p>
        </div>

        {/* <div>*/}
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="../../public/img/titânio.jpg"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Os modelos mais recentes de iPhone estão cheios de inovações. Eles
              trazem recursos da Apple Intelligence para facilitar seu dia a
              dia, como Inteligência Visual12 e Ferramentas de Escrita, além de
              conexões rápidas e seguras Wi‑Fi 713, Bluetooth 6, 5G14 e eSIM15.
            </p>
          </div>
          {/* <div>*/}
          <div className="bg-gray-900 rounded-3xl p-8 ">
            <img
              className="w-full rounded-2xl mb-8  "
              src="../../public/img/iphone-17-tela.png"
              alt="ios 2026"
            />
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              O sistema operacionaç mais avançado do mundo com IA integrada
            </p>
          </div>
        </div>
        {/* <div>*/}
        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl fonte-bold mb-6 text-gradient s">A18 pro</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderoso em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="../../public/img/chip-a18-pro.webp"
          ></img>
          <ul className="space-y-3 text-gray-300">
            <li>CPU 20% mais rápida</li>
            <li> GPU 25% mais eficiente</li>
            <li>Neural Egine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Highlights;
