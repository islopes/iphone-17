function Footer() {
  const sections = [
    {
      title: "Comprar e Saber mais",
      links: [
        "iphone 17 pro",
        "iphone 17 Pro Max",
        "iOS 26",
        "A18 Pro",
        "Acessórios",
      ],
    },
    {
      title: "Comprar e Saber mais",
      links: [
        "iphone 17 pro",
        "iphone 17 Pro Max",
        "iOS 26",
        "A18 Pro",
        "Acessórios",
      ],
    },
    {
      title: "Comprar e Saber mais",
      links: [
        "iphone 17 pro",
        "iphone 17 Pro Max",
        "iOS 26",
        "A18 Pro",
        "Acessórios",
      ],
    },
    {
      title: "Comprar e Saber mais",
      links: [
        "iphone 17 pro",
        "iphone 17 Pro Max",
        "iOS 26",
        "A18 Pro",
        "Acessórios",
      ],
    },
  ];

  const buttonLinls = [
    " Política de privacidade",
    " Política de vendas",
    " Avisos legais",
    " Mapa do site",
  ];
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className=" grid md:grid-cols-4 gap-8 mb-8 ">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="hover:text-white cursor-pointer" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-800 py-6">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-300">
            Copyright © 2026 Apple Inc. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 ">
            {buttonLinls.map((link, index) => (
              <div key={index}>
                <a className="text-gray-400 text-sm hover:text-white" href="">
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
