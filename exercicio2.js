const carros = [
  { nome: "corola", marca: "toyota", ano: 2020, cor: "prata" },
  { nome: "onix", marca: "chevrolet", ano: 2019, cor: "preto" },
  { nome: "uno", marca: "fiat", ano: 2010, cor: "branco" },
  { nome: "hb20", marca: "hyundai", ano: 2021, cor: "prata" },
  { nome: "kwid", marca: "renault", ano: 2017, cor: "branco" },
  { nome: "saveiro", marca: "volkswagen", ano: 2018, cor: "branco" },
  { nome: "toro", marca: "fiat", ano: 2019, cor: "vermelho" },
];

const ordenarCarros = (array, campo) => {
  array.sort((a, b) => {
    if (campo !== "ano") {
      return a[campo].localeCompare(b[campo]);
    } else {
      return a[campo] - b[campo];
    }
  });

  console.log(array);
};

ordenarCarros(carros, "ano");
